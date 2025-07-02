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
                                    Vue Cours
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
                                                        <div class="text-grey text-weight-medium mb-1">Id Annexe</div>
                                                        <div class="text-bold">{{ item.id_annexe }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">N Facture</div>
                                                        <div class="text-bold">{{ item.n_facture }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Lieu Depart</div>
                                                        <div class="text-bold">{{ item.lieu_depart }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Lieu Arrivee</div>
                                                        <div class="text-bold">{{ item.lieu_arrivee }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Heure Depart</div>
                                                        <div class="text-bold">{{ item.heure_depart }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Heure Arrivee</div>
                                                        <div class="text-bold">{{ item.heure_arrivee }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Km Jour</div>
                                                        <div class="text-bold">{{ item.km_jour }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Km Nuit</div>
                                                        <div class="text-bold">{{ item.km_nuit }}</div>
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
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Forfait Tarif</div>
                                                        <div class="text-bold">{{ item.forfait_tarif }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Attente</div>
                                                        <div class="text-bold">{{ item.attente }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Nb Patients</div>
                                                        <div class="text-bold"><q-chip>{{ item.nb_patients }}</q-chip></div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Tpmr</div>
                                                        <div class="text-bold">{{ item.tpmr }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Péage</div>
                                                        <div class="text-bold">{{ item.payage }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Id Assure</div>
                                                        <div class="text-bold">{{ item.id_assure }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Etat</div>
                                                        <div class="text-bold">{{ item.etat }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Facturation</div>
                                                        <div class="text-bold">{{ item.facturation }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Date Created</div>
                                                        <div class="text-bold">
                                                            <div v-if="item.date_created">
                                                                {{$utils.relativeDate(item.date_created)}}
                                                                <q-tooltip>
                                                                {{ $utils.humanDatetime(item.date_created) }}
                                                                </q-tooltip>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Date Updated</div>
                                                        <div class="text-bold">{{ item.date_updated }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Date</div>
                                                        <div class="text-bold">
                                                            <file-viewer icon="attachment" v-if="item.date" v-model="item.date"></file-viewer>
                                                        </div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Remises</div>
                                                        <div class="text-bold">{{ item.remises }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Zone</div>
                                                        <div class="text-bold">{{ item.zone }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Signature</div>
                                                        <div class="text-bold">
                                                            <image-viewer image-size="medium" image-preview-size="large" :src="item.signature" width="320px" height="320px" :num-display="1">
                                                            </image-viewer>
                                                        </div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Pec</div>
                                                        <div class="text-bold">{{ item.pec }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Minperc</div>
                                                        <div class="text-bold">{{ item.minperc }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div  class=" row q-col-gutter-xs justify-start q-ma-md">
                                        <template v-if="auth.canManage('', item.user_id)">
                                            <div><q-btn icon="edit" label="Edit"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Modifier"  @click="app.openPageDialog({ page:'courses/edit', url: `/courses/edit/${item.id_annexe}` , closeBtn: true })">
                                            </q-btn></div>
                                        </template>
                                        <template v-if="auth.canManage('', item.user_id)">
                                            <div><q-btn icon="delete_sweep" label="Delete"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="negative" title="Effacer"  @click="deleteItem(item.id_annexe)">
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
	import { utils } from 'src/utils';
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'id_annexe',
		},
		pageStoreKey: {
			type: String,
			default: 'COURSES',
		},
		pageName: {
			type: String,
			default: 'courses',
		},
		routeName: {
			type: String,
			default: 'coursesview',
		},
		apiPath: {
			type: String,
			default: 'courses/view',
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
			title: "Vue Cours"
		}
	});
	
	onMounted(()=>{ 
	});
</script>
<style scoped>
</style>
