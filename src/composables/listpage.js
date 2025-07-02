import { reactive, computed, onMounted, onUnmounted, watch, toRefs } from "vue";
import { utils } from 'src/utils';
import { useApp } from 'src/composables/app';
import { useRoute } from 'vue-router';
import { useQuasar } from "quasar";

export function useListPage({ store, props }) {
    const app = useApp();
    const route = useRoute();
    const $q = useQuasar();

    const { pagination, totalRecords, records, selectedItems, currentRecord } = toRefs(store.state);

    const state = reactive({
        pageReady: false,
        loading: false,
        deleting: false
    });

    const filters = store.state.filters;

    const filterParams = computed(() => {
        const query = {}
        for (const [key, filter] of Object.entries(filters)) {
            if (filterHasValue(filter)) {
                if (filter.valueType == "range") {
                    query[key] = {
                        min: filter.value.min,
                        max: filter.value.max,
                    };
                } else if (filter.valueType == "range-date") {
                    let fromDate = filter.value.from;
                    let toDate = filter.value.to;
                    query[key] = { from: fromDate, to: toDate };
                } else if (filter.valueType == "multiple-date") {
                    query[key] = filter.value; //.map((val) => utils.formatDate(val));
                } else {
                    query[key] = filter.value;
                }
            }
        }
        return query;
    });

    const apiUrl = computed(() => {
        let path = props.apiPath;

        if (props.fieldName) {
            const filterByColumn = encodeURIComponent(props.fieldName);
            const filterValue = encodeURIComponent(props.fieldValue);
            path = `${path}/${filterByColumn}/${filterValue}`;
        }

        const query = {};

        const orderBy = pagination.value.sortBy;
        const orderType = pagination.value.descending ? "desc" : "asc";

        query.page = pagination.value.page;
        query.limit = pagination.value.rowsPerPage;

        if (orderBy) {
            query.orderby = orderBy;
            query.ordertype = orderType;
        }
        Object.assign(query, filterParams.value);
        const queryParams = utils.serializeQuery(query);
        if (path.includes("?")) {
            return `${path}&${queryParams}`;
        }
        return `${path}?${queryParams}`;
    });

    const recordsPosition = computed(() => {
        return Math.min(
            pagination.value.page * pagination.value.rowsPerPage,
            totalRecords.value
        );
    });

    const totalPages = computed(() => {
        if (totalRecords.value > pagination.value.rowsPerPage) {
            return Math.ceil(totalRecords.value / pagination.value.rowsPerPage);
        }
        return 1;
    });

    const finishedLoading = computed(() => {
        const recordLength = records.value.length
        if (recordLength > pagination.value.rowsPerPage && recordLength >= totalRecords.value) {
            return true;
        }
        return false;
    });

    const canLoadMore = computed(() => {
        if (state.loading || finishedLoading.value) {
            return false;
        }
        return true;
    });

    const pageBreadCrumb = computed(() => {
        const fieldName = route.query.tag || props.fieldName;
        const fieldValue = route.query.label || props.fieldValue;
        return { fieldName, fieldValue };
    });

    function setPagination(event) {
        pagination.value = event.pagination;
    }

    async function loadNextPage(index, done) {
        if (index) {
            //quasar infinite scroll component
            if (!canLoadMore.value) {
                done(true); //when all data has been loaded
                return;
            }
            pagination.value.page = index;
            await load();
            done();
        } else {
            // load more button manual trigger
            // watch apiUrl will trigger load function
            pagination.value.page++;
        }
    }

    function loadPreviousPage() {
        if (pagination.value.page > 0) {
            pagination.value.page--; //will trigger load function
        }
    }

    function scrollToTop() {
        // display starting from first record
        // if not infinite load,
        if (props.routeName === route.name && !props.mergeRecords) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    async function load() {
        if (!canLoadMore.value) {
            return;
        }
        scrollToTop();

        state.pageReady = false;
        state.loading = true;

        const url = apiUrl.value;
        const payload = {
            url,
            merge: props.mergeRecords
        }
        try {
            //the store will load the page data and set current records
            await store.fetchRecords(payload);
            state.pageReady = true;
        }
        catch (err) {
            app.showPageRequestError(err);
        }
        finally {
            state.loading = false;
        }
    }

    function reload() {
        store.resetPageRecords();
    }

    function setCurrentRecord(record) {
        selectedItems.value = [record];
        currentRecord.value = record;
    }

    function expandRow(props) {
        setCurrentRecord(props.row);
        if (state.selectedRowIndex == props.rowIndex) {
            props.expand = !props.expand;
        }
        else {
            state.selectedRowIndex = props.rowIndex;
            props.expand = true;
        }
    }

    function isExpandedRow(props) {
        return props.expand && props.rowIndex == state.selectedRowIndex
    }

    function isCurrentRecord(row) {
        return row == currentRecord.value;
    }

    function importComplete(message) {
        app.flashMsg(message);
        reload();
    }

    function exportPage() {
        app.exportPageRecords(props.exportFormats, apiUrl.value, props.pageName);
    }

    async function deleteItem(id) {
        if (Array.isArray(id)) {
            id = id.map((value) => value[props.primaryKey]);
        }

        if (id) {
            const title = props.titleBeforeDelete;
            const prompt = props.msgBeforeDelete;
            $q.dialog({
                title: title,
                message: prompt,
                cancel: true,
                persistent: true,
            })
                .onOk(async () => {
                    const recid = encodeURIComponent(id.toString());
                    const url = `${props.pageName}/delete/${recid}`;
                    const payload = { id, url };
                    state.deleting = true;
                    try {
                        await store.deleteRecord(payload);
                        app.flashMsg(title, props.msgAfterDelete);
                    }
                    catch (err) {
                        app.showPageRequestError(err);
                    }
                    finally {
                        state.deleting = false;
                    }
                })
                .onCancel(() => {
                    // console.log('>>>> Cancel')
                })
                .onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                });
        }
    }

    function setFilterValue(filter, value) {
        let valueType = filter.valueType;
        if (valueType == "range") {
            const range = {}
            if (Array.isArray(value)) {
                range.min = Number(value[0]);
                range.max = Number(value[1])
            }
            else {
                range.min = 0;
                range.max = Number(value)
            }
            value = range;
        }
        else if (valueType == "range-date") {
            const range = {}
            if (Array.isArray(value)) {
                range.from = value[0];
                range.to = value[1];
            }
            else {
                range.from = utils.dateNow()
                range.to = value
            }
           value = range;
        }
        else if (valueType == "multiple" || valueType == "multiple-date") {
            if (!Array.isArray(value)) {
                value = value.split(',').filter(Boolean)
            }
        }
        filter.value = value;
    }

    function removeFilter(filter, selectedVal) {
        let valueType = filter.valueType;
        if (valueType == "range") {
            filter.value = { min: 0, max: 0 };
        }
        else if (valueType == "range-date") {
            filter.value = { from: null, to: null };
        }
        else if (valueType == "multiple" || valueType == "multiple-date") {
            let idx = filter.value.indexOf(selectedVal);
            filter.value.splice(idx, 1);
        }
        else {
            filter.value = null;
        }
    }

    function filterHasValue(filter) {
        if (filter.valueType == "range") {
            if (filter.value.max) {
                return true;
            }
            return false;
        } else if (filter.valueType == "range-date") {
            if (filter.value.to) {
                return true;
            }
            return false;
        } else if (Array.isArray(filter.value)) {
            return filter.value.length > 0;
        } else if (filter.value) {
            return true;
        }
        return false;
    }

    function getFilterLabel(filter, selectedVal) {
        if (filter.valueType == "range" && filter.value.max) {
            let min = filter.value.min;
            let max = filter.value.max;
            return `${min} - ${max}`;
        } else if (filter.valueType == "range-date") {
            if (filter.value.to) {
                let minDate = utils.humanDate(filter.value.from);
                let maxDate = utils.humanDate(filter.value.to);
                return `${minDate} --- ${maxDate}`;
            }
            return null;
        } else if (filter.valueType == "multiple-date") {
            let val = selectedVal || filter.value;
            return utils.humanDate(val);
        } else if (filter.valueType == "single-date") {
            return utils.humanDate(filter.value);
        } else if (filter.options.length) {
            let val = selectedVal || filter.value;
            let selectedFilter = filter.options.find((obj) => obj.value == val);
            if (selectedFilter) {
                return selectedFilter.label;
            }
        } else if (selectedVal) {
            return selectedVal.toString();
        }
        return filter.value.toString();
    }

    function updateFilterValues() {
        const params = props.queryParams
        for (const key in params) {
            const filter = filters[key];
            if (filter) {
                setFilterValue(filter, params[key]);
            }
        }
    }

    //reset pagination when filter changes
    const pageNeedReset = computed(() => {
        const filters = filterParams.value;
        const query = {
            field: props.field,
            value: props.fieldValue,
            ...filters
        }
        return query
    });

    watch(pageNeedReset, () => {
        store.resetPageRecords();
    });

    watch(apiUrl, () => {
        load()
    });

    watch(() => props.queryParams, () => {
        updateFilterValues();
    });

    onMounted(() => {
        updateFilterValues();

        if (props.autoLoad) {
            //for infinite load, ignore refetch if records already loaded
            const ignoreLoad = props.mergeRecords && totalRecords.value > 0
            if (!ignoreLoad) {
                load();
            }
            else{
				state.pageReady = true;
			}
        }
    });

    onUnmounted(() => {
        if (props.isSubPage) {
            store.$dispose();
        }
    });

    const computedProps = {
        apiUrl,
        pageBreadCrumb,
        canLoadMore,
        finishedLoading,
        totalPages,
        recordsPosition
    }

    const methods = {
        load,
        reload,
        loadNextPage,
        loadPreviousPage,
        setPagination,
        expandRow,
        isExpandedRow,
        exportPage,
        debounce: utils.debounce(),
        deleteItem,
        setCurrentRecord,
        isCurrentRecord,
        setFilterValue,
        removeFilter,
        getFilterLabel,
        filterHasValue,
        importComplete
    }

    const filterController = { filters, removeFilter, getFilterLabel, filterHasValue }
    
    return {
        state,
        computedProps,
        methods,
        filterController
    }
}