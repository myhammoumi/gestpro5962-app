<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col " >
                            <div class=" text-h6 text-primary" >
                                Utilisateurs
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <template v-if="auth.canView('')">
                                <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/utilisateurs/add`" class="full-width" >
                                    <q-icon name="add"></q-icon>                                
                                    Ajouter un nouveau 
                                </q-btn>
                            </template>
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
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="pageBreadCrumb.fieldName" to="/utilisateurs"></q-breadcrumbs-el>
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
                            :columns="app.menus.utilisateurslistheader" 
                            :rows="records"
                            :binary-state-sort="true"
                            separator="horizontal"
                            :dense="true"
                            v-model:selected="selectedItems"
                            selection="multiple"
                            row-key="id" 
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
                                    <q-td  key="login" :props="props">
                                        {{ props.row.login }}
                                    </q-td>
                                    <q-td  key="email" :props="props">
                                        <q-btn padding="xs"   flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   type="a" :href="`mailto:${props.row.email}`">{{ props.row.email }}</q-btn>
                                    </q-td>
                                    <q-td  key="nom" :props="props">
                                        {{ props.row.nom }}
                                    </q-td>
                                    <q-td  key="prenom" :props="props">
                                        {{ props.row.prenom }}
                                    </q-td>
                                    <q-td  key="date_naissance" :props="props">
                                        {{ props.row.date_naissance }}
                                    </q-td>
                                    <q-td  key="entreprise" :props="props">
                                        {{ props.row.entreprise }}
                                    </q-td>
                                    <q-td  key="telephone" :props="props">
                                        <q-btn padding="xs"   flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   type="a" :href="`tel:${props.row.telephone}`">{{ props.row.telephone }}</q-btn>
                                    </q-td>
                                    <q-td  key="user_role_id" :props="props">
                                        <q-chip>
                                        {{ props.row.user_role_id == 1 ? 'Administrateur' : 
                                        props.row.user_role_id == 2 ? 'Utilisateur' : unknown }}
                                        </q-chip>
                                    </q-td>
                                    <q-td key="btnactions" :props="props" >
                                        <div class="row q-col-gutter-xs justify-end">
                                            <template v-if="auth.canView('utilisateurs')">
                                                <div><q-btn icon="visibility" label="View"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="primary" title="Vue"  :to="`/utilisateurs/view/${props.row.id}`">
                                                </q-btn></div>
                                            </template>
                                            <template v-if="auth.canView('utilisateurs')">
                                                <div><q-btn icon="edit" label="Edit"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Modifier"  :to="`/utilisateurs/edit/${props.row.id}`">
                                                </q-btn></div>
                                            </template>
                                            <template v-if="auth.canView('utilisateurs')">
                                                <div><q-btn icon="delete_sweep" label="Delete"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Effacer"  @click="deleteItem(props.row.id)">
                                                </q-btn></div>
                                            </template>
                                        </div>
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
                                                    Login
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.login }}
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Email
                                                </div>
                                                <div class="col text-right">
                                                    <q-btn padding="xs"   flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   type="a" :href="`mailto:${props.row.email}`">{{ props.row.email }}</q-btn>
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Nom
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.nom }}
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Prenom
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.prenom }}
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Date Naissance
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.date_naissance }}
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Entreprise
                                                </div>
                                                <div class="col text-right">
                                                    {{ props.row.entreprise }}
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Telephone
                                                </div>
                                                <div class="col text-right">
                                                    <q-btn padding="xs"   flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   type="a" :href="`tel:${props.row.telephone}`">{{ props.row.telephone }}</q-btn>
                                                </div>
                                            </div>
                                            <div class="row q-py-sm q-col-gutter-md justify-content-between">
                                                <div class="col-auto text-caption">
                                                    Grade
                                                </div>
                                                <div class="col text-right">
                                                    <q-chip>
                                                    {{ props.row.user_role_id == 1 ? 'Administrateur' : 
                                                    props.row.user_role_id == 2 ? 'Utilisateur' : unknown }}
                                                    </q-chip>
                                                </div>
                                            </div>
                                        </q-card-section>
                                        <q-separator></q-separator>
                                        <div class="row justify-between">
                                            <div class="q-pa-sm"><q-checkbox  dense v-model="props.selected"></q-checkbox></div>
                                            <q-card-actions >
                                                <div class="row q-col-gutter-xs justify-end">
                                                    <template v-if="auth.canView('utilisateurs')">
                                                        <div><q-btn icon="visibility" label="View"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="primary" title="Vue"  :to="`/utilisateurs/view/${props.row.id}`">
                                                        </q-btn></div>
                                                    </template>
                                                    <template v-if="auth.canView('utilisateurs')">
                                                        <div><q-btn icon="edit" label="Edit"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Modifier"  :to="`/utilisateurs/edit/${props.row.id}`">
                                                        </q-btn></div>
                                                    </template>
                                                    <template v-if="auth.canView('utilisateurs')">
                                                        <div><q-btn icon="delete_sweep" label="Delete"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Effacer"  @click="deleteItem(props.row.id)">
                                                        </q-btn></div>
                                                    </template>
                                                </div>
                                            </q-card-actions>
                                        </div>
                                    </q-card>
                                </div>
                            </template>
                            <!-- End of Mobile Grid Layout-->
                            </q-table>
                            <div class="row justify-center">
                                <q-td></q-td>
                            </div>
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
                                            <template v-if="auth.canView('utilisateurs')">
                                                <div>
                                                    <q-btn round flat   no-caps  unelevated   color="negative" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Supprimer sélectionnée">
                                                        <q-tooltip>Delete Selected Items</q-tooltip>
                                                    </q-btn>
                                                </div>
                                            </template>
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
	import { useAuth } from 'src/composables/auth';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'id',
		},
		pageStoreKey: {
			type: String,
			default: 'UTILISATEURS',
		},
		pageName : {
			type : String,
			default : 'utilisateurs',
		},
		routeName : {
			type : String,
			default : 'utilisateurslist',
		},
		apiPath : {
			type : String,
			default : 'utilisateurs/index',
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
	const auth = useAuth();
	
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
			return "Utilisateurs"
		}
	});
	
	useMeta(() => {
		return {
			title: pageTitle.value //set browser title
		}
	});
</script>
<style scoped>
</style>
