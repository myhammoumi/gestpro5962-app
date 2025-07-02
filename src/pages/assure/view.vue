<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section q-pa-md" >
                    <div class="container">
                        <div class="row justify-between items-center q-col-gutter-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="arrow_back"></q-icon>                             
                                </q-btn>
                            </div>
                            <div  class="col " >
                                <div class=" text-h6 text-primary" >
                                    Vue Assure
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <div >
                                <div class="q-pa-md">
                                    <div class="q-mb-3 row justify-start q-col-gutter-sm">
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Gender</div>
                                                        <div class="text-bold">{{ item.gender }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Nom</div>
                                                        <div class="text-bold">{{ item.nom }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Prenom</div>
                                                        <div class="text-bold">{{ item.prenom }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Adresse</div>
                                                        <div class="text-bold">{{ item.adresse }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Cp</div>
                                                        <div class="text-bold">{{ item.cp }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Ville</div>
                                                        <div class="text-bold">{{ item.ville }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Tel</div>
                                                        <div class="text-bold">{{ item.tel }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Email</div>
                                                        <div class="text-bold">{{ item.email }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Adresse Compagnon</div>
                                                        <div class="text-bold">{{ item.adresse_compagnon }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Numéro de Secu</div>
                                                        <div class="text-bold">{{ item.num_secu }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Num de Secu2</div>
                                                        <div class="text-bold">{{ item.num_secu2 }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Num Amc</div>
                                                        <div class="text-bold">{{ item.num_amc }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Caisse</div>
                                                        <div class="text-bold">{{ item.caisse }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Mutuelle</div>
                                                        <div class="text-bold">{{ item.mutuelle }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Date Naissance</div>
                                                        <div class="text-bold">{{ item.date_naissance }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Nom Compagnon</div>
                                                        <div class="text-bold">{{ item.nom_compagnon }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Tel Compagnon</div>
                                                        <div class="text-bold">{{ item.tel_compagnon }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Remarques</div>
                                                        <div class="text-bold">{{ item.remarques }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Pieces Jointes</div>
                                                        <div class="text-bold">{{ item.pieces_jointes }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div  class=" row q-col-gutter-xs justify-start q-ma-md">
                                        <template v-if="auth.canManage('', item.id_user)">
                                            <div><q-btn icon="edit" label="Edit"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Modifier"  @click="app.openPageDialog({ page:'assure/edit', url: `/assure/edit/${item.id_assure}` , closeBtn: true })">
                                            </q-btn></div>
                                        </template>
                                        <template v-if="auth.canManage('', item.id_user)">
                                            <div><q-btn icon="delete_sweep" label="Delete"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Effacer"  @click="deleteItem(item.id_assure)">
                                            </q-btn></div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="q-pa-sm text-center relative-position">
                <q-inner-loading color="primary" label="Chargement..." showing></q-inner-loading>
            </div>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { useAuth } from 'src/composables/auth';
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'id_assure',
		},
		pageStoreKey: {
			type: String,
			default: 'ASSURE',
		},
		pageName: {
			type: String,
			default: 'assure',
		},
		routeName: {
			type: String,
			default: 'assureview',
		},
		apiPath: {
			type: String,
			default: 'assure/view',
		},
		autoLoad: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
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
			default: () => ['pdf'],
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp(props);
	const auth = useAuth();
	
	const page = useViewPage({store, props}); // where page logics resides
	
	const {  currentRecord } = toRefs(store.state);
	const { loading, pageReady } = toRefs(page.state);
	const item = currentRecord;
	
	const  { load, deleteItem,    } = page.methods;
	
	
	useMeta(() => {
		return {
			//set browser title
			title: "Vue Assure"
		}
	});
	
	onMounted(()=>{ 
	});
</script>
<style scoped>
</style>
