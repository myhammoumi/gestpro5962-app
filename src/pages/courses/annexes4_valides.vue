<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col " >
                            <div class=" text-h6 text-primary" >
                                Courses Validées
                                <div class="text-caption text-grey"> Les Courses soumise à votre Gestionnaire </div>
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <q-input debounce="1000"  placeholder="Chercher" v-model="filters.search.value" >
                            <template v-slot:append>
                                <q-icon name="search"></q-icon>
                            </template>
                            </q-input>
                        </div>
                        <!--topcardactiontemplates-->
                    </div>
                </div>
            </section>
        </template>
        <section class="page-section " >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <div class="row q-gutter-sm">
                            <filter-tags :controller="page.filterController" />
                        </div>
                        <div >
                            <template v-if="showBreadcrumbs && pageBreadCrumb.fieldName">
                                <q-card class="q-pa-md q-mb-sm text-bold nice-shadow-6">
                                    <q-breadcrumbs>
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="pageBreadCrumb.fieldName" to="/courses"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="pageBreadCrumb.fieldValue" ></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </q-card>
                        </template>
                        <!-- page records template -->
                        <div >
                            <q-table 
                            :grid="$q.screen.lt.md"
                            :flat="$q.screen.gt.md"
                            table-header-class="text-h4 bg-grey-2"
                            :bordered="false"
                            :columns="app.menus.coursesannexes4validesheader" 
                            :rows="records"
                            :binary-state-sort="true"
                            separator="horizontal"
                            :dense="true"
                            v-model:selected="selectedItems"
                            selection="multiple"
                            row-key="id_annexe" 
                            v-model:pagination="pagination"
                            hide-bottom
                            @request="setPagination"
                            :loading="loading">
                            <!-- Start of Table Layout -->
                            <template v-slot:body="props">
                                <q-tr :class="{selected: isCurrentRecord(props.row)}" :props="props">
                                    <q-td auto-width>
                                        <q-checkbox dense v-model="props.selected"></q-checkbox>
                                    </q-td>
                                    <q-td  key="date_created" :props="props">
                                        <q-chip>{{ formatDate(props.row.date_created) }}</q-chip>
                                    </q-td>
                                    <q-td  key="id_assure" :props="props">
                                        <q-btn v-if="props.row.id_assure" @click="app.openPageDialog({ page: 'assure/view', url: `/assure/view/${props.row.id_assure}` , closeBtn: true, width: '50%' })" padding="xs" flat color="primary" no-caps >
                                            <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  {{ props.row.assure_nom }}
                                        </q-btn>
                                    </q-td>
                                    <q-td  key="etat" :props="props">
                                        <q-chip>{{ props.row.etat == 1 ? 'Enregistrée' : 
                                        props.row.etat == 2 ? 'Validée' : 
                                        props.row.etat == 3 ? 'Envoyé à la facturation' : 
                                        props.row.etat == 4 ? 'Facturé' : 'Autre' }}
                                        </q-chip>
                                    </q-td>
                                    <q-td  key="date_updated" :props="props">
                                        <q-chip>{{ formatDate(props.row.date_updated) }}</q-chip>
                                    </q-td>
                                    <q-td  key="zone" :props="props">
                                        {{ props.row.zone }}
                                    </q-td>
                                    <q-td  key="pieces_jointes" :props="props">
                                        <q-chip v-for="(file, index) in getFullFilePath(props.row.pieces_jointes)" :key="index" clickable>
                                        <a :href="file" download>{{ "PJ-" + (index + 1) }}</a>
                                        </q-chip>
                                    </q-td>
                                    <q-td  key="pec" :props="props">
                                        {{ props.row.pec }}
                                    </q-td>
                                    <q-td  key="minperc" :props="props">
                                        {{ props.row.minperc }}
                                    </q-td>
                                </q-tr>
                            </template>
                            <!-- End of Table Layout-->
                            <!-- Start of Mobile Grid Layout-->
                            <template v-slot:item="props">
                                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
                                    <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                        <q-card-section>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Crée
                                                </div>
                                                <div class="col text-right">
                                                    <q-chip>{{ formatDate(props.row.date_created) }}</q-chip>
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Fiche Assuré
                                                </div>
                                                <div class="col text-right">
                                                    <q-btn v-if="props.row.id_assure" @click="app.openPageDialog({ page: 'assure/view', url: `/assure/view/${props.row.id_assure}` , closeBtn: true, width: '50%' })" padding="xs" flat color="primary" no-caps >
                                                        <q-icon name="visibility" size="xs"  class="q-mr-xs"></q-icon>  {{ props.row.assure_nom }}
                                                    </q-btn>
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Etat
                                                </div>
                                                <div class="col text-right">
                                                    <q-chip>{{ props.row.etat == 1 ? 'Enregistrée' : 
                                                    props.row.etat == 2 ? 'Validée' : 
                                                    props.row.etat == 3 ? 'Envoyé à la facturation' : 
                                                    props.row.etat == 4 ? 'Facturé' : 'Autre' }}
                                                    </q-chip>
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Mis à Jour
                                                </div>
                                                <div class="col text-right">
                                                    <q-chip>{{ formatDate(props.row.date_updated) }}</q-chip>
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Zone
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.zone }}
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Pieces Jointes
                                                </div>
                                                <div class="col text-right">
                                                    <q-chip v-for="(file, index) in getFullFilePath(props.row.pieces_jointes)" :key="index" clickable>
                                                    <a :href="file" download>{{ "PJ-" + (index + 1) }}</a>
                                                    </q-chip>
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Pec
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.pec }}
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Minperc
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.minperc }}
                                                </div>
                                            </div>
                                        </q-card-section>
                                        <q-separator></q-separator>
                                        <div class="row justify-between">
                                            <div class="q-pa-sm"><q-checkbox  dense v-model="props.selected"></q-checkbox></div>
                                        </div>
                                    </q-card>
                                </div>
                            </template>
                            <!-- End of Mobile Grid Layout-->
                            </q-table>
                        </div>
                        <!-- page loading indicator template -->
                        <template v-if="loading">
                            <q-inner-loading :showing="loading">
                                <q-spinner color="primary" size="30px"> 
                                </q-spinner>
                            </q-inner-loading>
                        </template>
                        <!-- page empty record template -->
                        <template v-if="pageReady && !records.length">
                            <q-card :flat="$q.screen.gt.md">
                                <q-card-section>
                                    <div class="text-grey text-h6 text-center">
                                        Aucun Enregistrement Trouvé
                                    </div>
                                </q-card-section>
                            </q-card>
                        </template>
                        <!-- page footer template-->
                        <template v-if="showFooter">
                            <div class="">
                                <div  v-show="pageReady">
                                    <div class="row items-center justify-between">
                                        <div class="row items-center q-col-gutter-md">
                                            <div>
                                                <q-btn v-if="exportButton"    :rounded="false"  no-caps  unelevated   color="accent" class="q-my-xs" @click="exportPage()" label="Exportation"  title="Exportation" icon="print">
                                                </q-btn>
                                            </div>
                                        </div>
                                        <div v-if="paginate && totalRecords > 0" class="row  items-center justify-between">
                                            <div class="col-auto">
                                                <q-chip square>Records {{recordsPosition}} sur {{totalRecords}}</q-chip>
                                            </div>
                                            <div v-if="totalPages > 1">
                                                <q-pagination  color="primary"  v-model="pagination.page" :direction-links="true" :boundary-links="true" :max-pages="5" :boundary-numbers="true" :max="totalPages"></q-pagination>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</template>
<script setup>
	import {  computed, ref, toRefs } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'id_annexe',
		},
		pageStoreKey: {
			type: String,
			default: 'COURSES-ANNEXES4_VALIDES',
		},
		pageName : {
			type : String,
			default : 'courses',
		},
		routeName : {
			type : String,
			default : 'coursesannexes4_valides',
		},
		apiPath : {
			type : String,
			default : 'courses/annexes4_valides',
		},
		autoLoad: {
			type: Boolean,
			default: true,
		},
		enableCache: {
			type: Boolean,
			default: false,
		},
		paginate: {
			type: Boolean,
			default: true,
		},
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type: Boolean,
			default: false,
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		showBreadcrumbs: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		importButton: {
			type: Boolean,
			default: false,
		},
		multiCheckbox: {
			type: Boolean,
			default: true,
		},
		mergeRecords: {
			type: Boolean,
			default: false,
		},
		page: {
			type: Number,
			default: 1,
		},
		limit: {
			type: Number,
			default: 10,
		},
		search: {
			type: String,
			default: '',
		},
		fieldName: null,
		fieldValue: null,
		queryParams: { 
			type: Object,
			default: () => ({})
		},
		sortBy: {
			type: String,
			default: '',
		},
		sortType: {
			type: String,
			default: 'desc', //desc or asc
		},
		emptyRecordMsg: {
			type: String,
			default: "Aucun Enregistrement Trouvé",
		},
		titleBeforeDelete: {
			type: String,
			default: "Supprimer l'enregistrement",
		},
		msgBeforeDelete: {
			type: String,
			default: "Êtes-vous sûr de vouloir supprimer cet enregistrement?",
		},
		msgAfterDelete: {
			type: String,
			default: "Enregistrement supprimé avec succès",
		},
		exportFormats: {
			type: Array,
			default: () => ['print','pdf','excel','csv'],
		},
	});
	
	const app = useApp();
	
	const defaultStoreState = {
		filters: {
			search: {
				tag: "Search",
				value: '',
				valueType: 'single',
				options: [],
			}
		},
		pagination: {
			page: props.page,
			rowsPerPage: props.limit,
			rowsNumber: 0,
			sortBy: props.sortBy,
			descending: props.sortType == 'desc'
		},
		primaryKey: props.primaryKey
	}
	const store = usePageStore(props.pageStoreKey,  defaultStoreState);
	
	// page hooks where logics resides
	const page = useListPage({ store, props });
	
	const {records, filters,  totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, } = toRefs(page.state);
	
	const {  pageBreadCrumb,   totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,    exportPage,  setPagination, deleteItem,  isCurrentRecord,     } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Courses"
		}
	});
	
	useMeta(() => {
		return {
			title: pageTitle.value //set browser title
		}
	});
	const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
};
//const pieces_jointes = ref('');
const getFullFilePath = (pieces_jointes) => {
    if (pieces_jointes) {
        return pieces_jointes.split(',');  // Split by comma to get individual file links
    }
    return [];
};
</script>
<style scoped>
</style>
