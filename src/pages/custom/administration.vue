<template>
    <q-page class="main-page"  id="">
        <section class="page-section q-pa-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <div class=" text-h6 text-bold" >
                            Administration
                        </div>
                    </div>
                    <div  class="col-12 comp-grid" >
                        <q-card  :flat="isSubPage" class=" nice-shadow-6">
                            <div >
                                <q-tabs v-model="TabPage409" align="left" :dense="true"  :inline-label="true" no-caps active-color="primary" indicator-color="primary">
                                    <q-tab name="TabPage409Page1"  label="Villes" />
                                    <q-tab name="TabPage409Page2"  label="Tarifs" />
                                    <q-tab name="TabPage409Page3"  label="Utilisateurs" />
                                    <q-tab name="TabPage409Page4"  label="permissions" />
                                    <q-tab name="TabPage409Page5"  label="Roles" />
                                </q-tabs>
                                <q-separator></q-separator>
                                <q-tab-panels keep-alive v-model="TabPage409" animated>
                                    <q-tab-panel  class="q-pa-none" name="TabPage409Page1">
                                        <div class="">
                                            <div class="reset-grid">
                                                <list-cpsvillesfr-page ref="cpsvillesfrListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-CPSVILLESFR" is-sub-page>
                                                    </list-cpsvillesfr-page>
                                                </div>
                                            </div>
                                        </q-tab-panel>
                                        <q-tab-panel  class="q-pa-none" name="TabPage409Page2">
                                            <q-card   class=" ">
                                                <div >
                                                    <q-tabs v-model="TabPage733" align="left" :dense="true"  :inline-label="true" no-caps active-color="primary" indicator-color="primary">
                                                        <q-tab name="TabPage733Page1"  label="Tarifs" />
                                                        <q-tab name="TabPage733Page2"  label="Les Remises" />
                                                        <q-tab name="TabPage733Page3"  label="Pec par Zone" />
                                                        <q-tab name="TabPage733Page4"  label="Min Perception" />
                                                    </q-tabs>
                                                    <q-separator></q-separator>
                                                    <q-tab-panels keep-alive v-model="TabPage733" animated>
                                                        <q-tab-panel  class="q-pa-none" name="TabPage733Page1">
                                                            <div class="">
                                                                <div class="reset-grid">
                                                                    <list-forfaittarif-page ref="forfaittarifListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-FORFAITTARIF" is-sub-page>
                                                                        </list-forfaittarif-page>
                                                                    </div>
                                                                </div>
                                                            </q-tab-panel>
                                                            <q-tab-panel  class="q-pa-none" name="TabPage733Page2">
                                                                <div class="">
                                                                    <div class="reset-grid">
                                                                        <list-remises-page ref="remisesListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-REMISES" is-sub-page>
                                                                            </list-remises-page>
                                                                        </div>
                                                                    </div>
                                                                </q-tab-panel>
                                                                <q-tab-panel  class="q-pa-none" name="TabPage733Page3">
                                                                    <div class="">
                                                                        <div class="reset-grid">
                                                                            <list-pec-page ref="pecListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-PEC" is-sub-page>
                                                                                </list-pec-page>
                                                                            </div>
                                                                        </div>
                                                                    </q-tab-panel>
                                                                    <q-tab-panel  class="q-pa-none" name="TabPage733Page4">
                                                                        <div class="">
                                                                            <div class="reset-grid">
                                                                                <list-minperc-page ref="minpercListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-MINPERC" is-sub-page>
                                                                                    </list-minperc-page>
                                                                                </div>
                                                                            </div>
                                                                        </q-tab-panel>
                                                                    </q-tab-panels>
                                                                </div>
                                                            </q-card>
                                                        </q-tab-panel>
                                                        <q-tab-panel  class="q-pa-none" name="TabPage409Page3">
                                                            <div class="">
                                                                <div class="reset-grid">
                                                                    <list-utilisateurs-page ref="utilisateursListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-UTILISATEURS" is-sub-page>
                                                                        </list-utilisateurs-page>
                                                                    </div>
                                                                </div>
                                                            </q-tab-panel>
                                                            <q-tab-panel  class="q-pa-none" name="TabPage409Page4">
                                                                <div class="">
                                                                    <div class="reset-grid">
                                                                        <list-permissions-page ref="permissionsListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-PERMISSIONS" is-sub-page>
                                                                            </list-permissions-page>
                                                                        </div>
                                                                    </div>
                                                                </q-tab-panel>
                                                                <q-tab-panel  class="q-pa-none" name="TabPage409Page5">
                                                                    <div class="">
                                                                        <div class="reset-grid">
                                                                            <list-roles-page ref="rolesListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-ROLES" is-sub-page>
                                                                                </list-roles-page>
                                                                            </div>
                                                                        </div>
                                                                    </q-tab-panel>
                                                                </q-tab-panels>
                                                            </div>
                                                        </q-card>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </q-page>
                                
</template>
<script setup>
	import {  computed, ref } from 'vue';
	
	
	import { useApp } from 'src/composables/app.js';
	
	
	import listCpsvillesfrPage from "../cpsvillesfr/list.vue";
import listForfaittarifPage from "../forfaittarif/list.vue";
import listRemisesPage from "../remises/list.vue";
import listPecPage from "../pec/list.vue";
import listMinpercPage from "../minperc/list.vue";
import listUtilisateursPage from "../utilisateurs/list.vue";
import listPermissionsPage from "../permissions/list.vue";
import listRolesPage from "../roles/list.vue";
	
	const props = defineProps({
		pageName: {
			type: String,
			default: 'home',
		},
		routeName: {
			type: String,
			default: 'home',
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	const app = useApp();
	
	const pageReady = ref(true);
	const TabPage733 = ref('TabPage733Page1');
	const TabPage409 = ref('TabPage409Page1');
	
</script>
<style scoped>
</style>
