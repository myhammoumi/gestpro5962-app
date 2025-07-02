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
                                    Ajouter un nouveau
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
                                <q-form ref="observer" @submit.prevent="submitForm()">
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                    <div class="row q-col-gutter-x-md">
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
                                                    Heure Prise en charge 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlheure_depart" v-model.trim="formData.heure_depart"  label="Heure Prise en charge" type="text" placeholder="Entrer Heure Prise en charge"      
                                                    class="" :error="isFieldValid('heure_depart')" :error-message="getFieldError('heure_depart')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Déposé  
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlheure_arrivee" v-model.trim="formData.heure_arrivee"  label="Déposé " type="text" placeholder="Entrer Déposé "      
                                                    class="" :error="isFieldValid('heure_arrivee')" :error-message="getFieldError('heure_arrivee')">
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
                                                    Forfait Tarif 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.forfait_tarif = ''" :load-on-mount="false" :api-path="`components_data/forfait_tarif_option_list?lookup_zone=${formData.zone}`"  v-slot="req">
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
                                                    PEC 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.pec = ''" :load-on-mount="false" :api-path="`components_data/pec_option_list?lookup_zone=${formData.zone}`"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlpec" v-model="formData.pec" :options="req.response" label="PEC"  :error="isFieldValid('pec')" :error-message="getFieldError('pec')">
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Perception min 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.minperc = ''" :load-on-mount="false" :api-path="`components_data/minperc_option_list?lookup_zone=${formData.zone}`"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlminperc" v-model="formData.minperc" :options="req.response" label="Perception min"  :error="isFieldValid('minperc')" :error-message="getFieldError('minperc')">
                                                        </nice-select>  
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
                                                    <q-input   ref="ctrlattente" v-model.trim="formData.attente"  label="Attente" type="number" placeholder="Entrer Attente"   step="any"    
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
                                                    Personne Assuré *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'id_assure')"  api-path="components_data/id_assure_option_list"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlid_assure" v-model="formData.id_assure" :options="req.response" label="Personne Assuré"  :error="isFieldValid('id_assure')" :error-message="getFieldError('id_assure')">
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
                                                    <nice-select        ref="ctrletat" v-model="formData.etat" :options="app.menus.etat" label="Etat"  :error="isFieldValid('etat')" :error-message="getFieldError('etat')">
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
                                                        <q-uploader-input :max-files="5" :max-file-size="3" accept=".docx,.doc,.pdf,.jpg,.png,.gif,.jpeg" :multiple="true" delete-icon="clear" style="width:100%" label="Choisissez des fichiers ou déposez des fichiers ici" upload-path="fileuploader/upload/pieces_jointes" v-model="formData.pieces_jointes"></q-uploader-input>
                                                        <!-- <small class="q-pa-sm text-negative"></small> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn type="submit"    :rounded="false"  color="primary"  no-caps  unelevated    icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                </q-card>
                                </q-form>
                                <slot :submit="submitForm" :saving="saving"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs, onMounted } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'courses',
		},
		pageStoreKey: {
			type: String,
			default: 'COURSES',
		},
		routeName : {
			type : String,
			default : 'coursesadd',
		},
		apiPath : {
			type : String,
			default : 'courses/add',
		},
		submitButtonLabel: {
			type: String,
			default: "Soumettre",
		},
		formValidationError: {
			type: String,
			default: "Le formulaire est invalide",
		},
		formValidationMsg: {
			type: String,
			default: "Veuillez remplir le formulaire",
		},
		msgTitle: {
			type: String,
			default: "Créer un enregistrement",
		},
		msgAfterSave: {
			type: String,
			default: "Enregistrement ajouté avec succès",
		},
		msgBeforeSave: {
			type: String,
			default: "",
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
		pageData: { // use to set formData default values from another page
			type: Object,
			default: () => ({
				lieu_depart: "", lieu_arrivee: "", heure_depart: "", heure_arrivee: "", km_jour: "0", km_nuit: "0", zone: "59", forfait_tarif: "2.70", remises: "", pec: "", minperc: "", attente: "0", nb_patients: "1", tpmr: "0", payage: "0", id_assure: "", etat: "1", pieces_jointes: [], 
			})
		},
	});
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();// application state and methods
	
	const formData = reactive({ ...props.pageData });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			km_jour: { numeric },
		km_nuit: { numeric },
		attente: { numeric },
		payage: { numeric },
		id_assure: { required }
		}
	});
	
	const page = useAddPage({ store, props, formData, rules, beforeSubmit, afterSubmit });// page form hook
	
	//event raised before form submit
	function beforeSubmit(){
		return true;
	}
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		page.setFormDefaultValues(); // reset form data
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/courses`);
		}
	}
	
	const {  saving, pageReady,   } = toRefs(page.state);
	
	const { submitForm, isFieldValid, getFieldError, mapOptionField } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Ajouter un nouveau"
		}
	});
	
	onMounted(()=>{ 
	});
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
