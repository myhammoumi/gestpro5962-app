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
                                    modifier
                                </div>
                            </div>
                            <!--topcardactiontemplates-->
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    N Facture 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrln_facture" v-model.trim="formData.n_facture"  label="N Facture" type="text" placeholder="Entrer N Facture"    readonly  
                                                    class="" :error="isFieldValid('n_facture')" :error-message="getFieldError('n_facture')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Lieu Depart 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllieu_depart" v-model.trim="formData.lieu_depart"  label="Lieu Depart" type="text" placeholder="Entrer Lieu Depart"      
                                                    class="" :error="isFieldValid('lieu_depart')" :error-message="getFieldError('lieu_depart')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Lieu Arrivee 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllieu_arrivee" v-model.trim="formData.lieu_arrivee"  label="Lieu Arrivee" type="text" placeholder="Entrer Lieu Arrivee"      
                                                    class="" :error="isFieldValid('lieu_arrivee')" :error-message="getFieldError('lieu_arrivee')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Km Jour 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlkm_jour" v-model.trim="formData.km_jour"  label="Km Jour" type="number" placeholder="Entrer Km Jour"   step="any"    
                                                    class="" :error="isFieldValid('km_jour')" :error-message="getFieldError('km_jour')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Km Nuit 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlkm_nuit" v-model.trim="formData.km_nuit"  label="Km Nuit" type="number" placeholder="Entrer Km Nuit"   step="any"    
                                                    class="" :error="isFieldValid('km_nuit')" :error-message="getFieldError('km_nuit')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Forfait Tarif 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source   api-path="components_data/forfait_tarif_option_list_2"  v-slot="req">
                                                        <div class="q-mb-md">
                                                            <q-btn-toggle  ref="ctrlforfait_tarif" v-model="formData.forfait_tarif" :options="req.response" toggle-color="positive" color="grey-7"     :rounded="false"  no-caps  unelevated    :error="isFieldValid('forfait_tarif')" :error-message="getFieldError('forfait_tarif')" />
                                                        </div>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Attente 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlattente" v-model.trim="formData.attente"  label="Attente" type="number" placeholder="Entrer Attente"   step="0.1"    
                                                    class="" :error="isFieldValid('attente')" :error-message="getFieldError('attente')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nb Patients 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-md">
                                                        <q-btn-toggle  ref="ctrlnb_patients" v-model="formData.nb_patients" :options="app.menus.nbPatients" toggle-color="positive" color="grey-7"     :rounded="false"  no-caps  unelevated    :error="isFieldValid('nb_patients')" :error-message="getFieldError('nb_patients')" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    TPMR 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltpmr" v-model.trim="formData.tpmr"  label="TPMR" type="text" placeholder="Entrer TPMR"      
                                                    class="" :error="isFieldValid('tpmr')" :error-message="getFieldError('tpmr')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Péage 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpayage" v-model.trim="formData.payage"  label="Péage" type="number" placeholder="Entrer Péage"   step="0.1"    
                                                    class="" :error="isFieldValid('payage')" :error-message="getFieldError('payage')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Assuré 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'id_assure')"  api-path="components_data/id_assure_option_list_2"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlid_assure" v-model="formData.id_assure" :options="req.response" label="Assuré"  :error="isFieldValid('id_assure')" :error-message="getFieldError('id_assure')">
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Etat 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <nice-select        ref="ctrletat" v-model="formData.etat" :options="app.menus.etat2" label="Etat"  :error="isFieldValid('etat')" :error-message="getFieldError('etat')">
                                                    </nice-select>  
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Pieces Jointes 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-input show-uploaded-files :max-files="5" :max-file-size="3" accept=".docx,.doc,.pdf,.jpg,.png,.gif,.jpeg" :multiple="true" delete-icon="clear" style="width:100%" label="Choisissez des fichiers ou déposez des fichiers ici" upload-path="fileuploader/upload/pieces_jointes" v-model="formData.pieces_jointes"  ></q-uploader-input>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Remises 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.remises = ''" :load-on-mount="false" :api-path="`components_data/remises_option_list?lookup_zone=${formData.zone}`"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlremises" v-model="formData.remises" :options="req.response" label="Remises"  :error="isFieldValid('remises')" :error-message="getFieldError('remises')">
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Zone 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source   api-path="components_data/zone_option_list"  v-slot="req">
                                                        <div class="q-mb-md">
                                                            <q-btn-toggle  ref="ctrlzone" v-model="formData.zone" :options="req.response" toggle-color="positive" color="grey-7"     :rounded="false"  no-caps  unelevated    :error="isFieldValid('zone')" :error-message="getFieldError('zone')" />
                                                        </div>
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Heure Arrivee 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlheure_arrivee" v-model.trim="formData.heure_arrivee"  label="Heure Arrivee" type="text" placeholder="Entrer Heure Arrivee"      
                                                    class="" :error="isFieldValid('heure_arrivee')" :error-message="getFieldError('heure_arrivee')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Pec 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpec" v-model.trim="formData.pec"  label="Pec" type="text" placeholder="Entrer Pec"      
                                                    class="" :error="isFieldValid('pec')" :error-message="getFieldError('pec')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Minperc 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlminperc" v-model.trim="formData.minperc"  label="Minperc" type="text" placeholder="Entrer Minperc"      
                                                    class="" :error="isFieldValid('minperc')" :error-message="getFieldError('minperc')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
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
	import {  computed, ref, reactive, toRefs, onMounted } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'courses',
		},
		pageStoreKey: {
			type: String,
			default: 'COURSES',
		},
		routeName: {
			type: String,
			default: 'coursesedit_admin',
		},
		pagePath: {
			type : String,
			default : 'courses/edit_admin',
		},
		apiPath: {
			type: String,
			default: 'courses/edit_admin',
		},
		submitButtonLabel: {
			type: String,
			default: "Réviser",
		},
		msgTitle: {
			type: String,
			default: "Mettre à jour l'enregistrement",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		msgAfterSave: {
			type: String,
			default: "Enregistrement mis à jour avec succès",
		},
		formValidationError: {
			type: String,
			default: "Le formulaire est invalide",
		},
		formValidationMsg: {
			type: String,
			default: "Veuillez remplir le formulaire",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		n_facture: "", lieu_depart: "", lieu_arrivee: "", km_jour: "", km_nuit: "", forfait_tarif: "2.70", attente: "", nb_patients: "1", tpmr: "", payage: "", id_assure: "", etat: "", pieces_jointes: [], remises: "", zone: "", heure_arrivee: "", pec: "", minperc: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			// if page is open as dialog, close dialog
			app.closeDialogs();
		}
		else if(props.redirect) {
			app.navigateTo(`/`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			km_jour: { numeric },
		km_nuit: { numeric },
		attente: { numeric },
		payage: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError, mapOptionField, } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "modifier"
		}
	});
	
	onMounted(()=>{ 
	});
</script>
<style scoped>
</style>
