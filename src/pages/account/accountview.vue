<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <div >
                                <div class="relative-position" style="min-height:100px">
                                    <div>
                                        <q-card class="q-pa-lg q-my-md nice-shadow-6">
                                            <div class="row q-col-gutter-lg">
                                                <div class="col-auto">
                                                    <q-avatar class="q-mr-sm" size="50px" color="grey-3" text-color="primary" icon="account_box" />
                                                    </div>
                                                    <div class="col">
                                                        <div class="text-h5 text-capitalize text-primary text-bold"> {{ $auth.userName }} </div>
                                                        <div class="text-caption"> {{ $auth.userEmail }} </div>
                                                        <div v-if="$auth.userRole" class="text-capitalize text-grey text-bold">{{ $auth.userRole }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                            <div class="row q-col-gutter-md">
                                                <div class="col-sm-3 col-12">
                                                    <q-card   :flat="isSubPage" class="nice-shadow-6">
                                                        <q-tabs vertical class="text-primary" v-model="tab" no-caps inline-label>
                                                            <q-tab name="accountview" icon="account_box" label="Détail du compte" style="justify-content:initial" />
                                                            <q-tab name="accountedit" icon="edit" label="Modifier le compte" style="justify-content:initial" />
                                                            <q-tab name="changepassword" icon="lock" label="Changer le mot de passe" style="justify-content:initial" />
                                                        </q-tabs>
                                                    </q-card>
                                                </div>
                                                <dsiv class="col-sm-9 col-12">
                                                <q-tab-panels v-model="tab" animated transition-prev="jump-up" transition-next="jump-up">
                                                    <q-tab-panel name="accountview">
                                                        <div class="row justify-start q-col-gutter-sm">
                                                            <div class="col-12">
                                                                <q-card  class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div class="text-grey text-weight-medium mb-1">Login</div>
                                                                            <div class="text-bold">{{ item.login }}</div>
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
                                                                            <div class="text-grey text-weight-medium mb-1">Entreprise</div>
                                                                            <div class="text-bold">{{ item.entreprise }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card  class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div class="text-grey text-weight-medium mb-1">Infos</div>
                                                                            <div class="text-bold">{{ item.infos }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card  class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div class="text-grey text-weight-medium mb-1">Telephone</div>
                                                                            <div class="text-bold">{{ item.telephone }}</div>
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
                                                                            <div class="text-grey text-weight-medium mb-1">Date Contrôle Technique</div>
                                                                            <div class="text-bold">{{ item.date_cteck }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card  class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div class="text-grey text-weight-medium mb-1">Date Visite Medicale</div>
                                                                            <div class="text-bold">{{ item.date_vmedi }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card  class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div class="text-grey text-weight-medium mb-1">Date Formation Continue</div>
                                                                            <div class="text-bold">{{ item.date_fc }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="col-12">
                                                                <q-card  class="q-pa-md nice-shadow-6">
                                                                    <div class="row q-col-gutter-x-md items-center">
                                                                        <div class="col">
                                                                            <div class="text-grey text-weight-medium mb-1">Date Revision Taxi M</div>
                                                                            <div class="text-bold">{{ item.date_rev_taxi_m }}</div>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                        </div>
                                                    </q-tab-panel>
                                                    <q-tab-panel name="accountedit">
                                                        <div class="reset-grid">
                                                            <account-edit-page is-sub-page></account-edit-page>
                                                            </div>
                                                        </q-tab-panel>
                                                        <q-tab-panel name="changepassword">
                                                            <change-password-page is-sub-page></change-password-page>
                                                        </q-tab-panel>
                                                    </q-tab-panels>
                                                    </dsiv>
                                                </div>
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
	import {  computed, ref, toRefs } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { useAuth } from 'src/composables/auth';
	import  AccountEditPage  from "./accountedit.vue";
	import  ChangePasswordPage  from "./changepassword.vue";
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'id',
		},
		pageStoreKey: {
			type: String,
			default: 'ACCOUNT',
		},
		pageName: {
			type: String,
			default: 'utilisateurs',
		},
		routeName: {
			type: String,
			default: 'utilisateursaccountview',
		},
		apiPath: {
			type: String,
			default: 'account',
		},
		autoLoad: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
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
		showHeader: {
			type: Boolean,
			default: true,
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp(props);
	const auth = useAuth();
	const page = useViewPage({ store, props });
	
	const { currentRecord } = toRefs(store.state);
	const { loading, pageReady } = toRefs(page.state);
	const item = currentRecord;
	const { load, deleteItem, } = page.methods;
	
	const tab = ref('accountview');
	
	
	useMeta(() => {
		return {
			//set browser title
			title: "Mon compte"
		}
	});
</script>
<style scoped>
</style>
