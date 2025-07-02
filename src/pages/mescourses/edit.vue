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
                                                    <q-input   ref="ctrln_facture" v-model.trim="formData.n_facture"  label="N Facture" type="text" placeholder="Entrer N Facture"      
                                                    class="" :error="isFieldValid('n_facture')" :error-message="getFieldError('n_facture')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Heure Depart 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlheure_depart" v-model="formData.heure_depart"    :error="isFieldValid('heure_depart')" :error-message="getFieldError('heure_depart')">
                                                    <template v-slot:append>
                                                        <q-icon name="access_time" class="cursor-pointer">
                                                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                        <q-time   mask="HH:mm" v-model="formData.heure_depart" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
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
                                                    <q-input   ref="ctrlforfait_tarif" v-model.trim="formData.forfait_tarif"  label="Forfait Tarif" type="number" placeholder="Entrer Forfait Tarif"   step="0.1"    
                                                    class="" :error="isFieldValid('forfait_tarif')" :error-message="getFieldError('forfait_tarif')">
                                                    </q-input>
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
                                                    <q-input   ref="ctrlnb_patients" v-model.trim="formData.nb_patients"  label="Nb Patients" type="number" placeholder="Entrer Nb Patients"   step="any"    
                                                    class="" :error="isFieldValid('nb_patients')" :error-message="getFieldError('nb_patients')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tpmr 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltpmr" v-model.trim="formData.tpmr"  label="Tpmr" type="text" placeholder="Entrer Tpmr"      
                                                    class="" :error="isFieldValid('tpmr')" :error-message="getFieldError('tpmr')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Payage 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpayage" v-model.trim="formData.payage"  label="Payage" type="number" placeholder="Entrer Payage"   step="0.1"    
                                                    class="" :error="isFieldValid('payage')" :error-message="getFieldError('payage')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Id Assure 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlid_assure" v-model.trim="formData.id_assure"  label="Id Assure" type="number" placeholder="Entrer Id Assure"   step="any"    
                                                    class="" :error="isFieldValid('id_assure')" :error-message="getFieldError('id_assure')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    User Id 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrluser_id" v-model.trim="formData.user_id"  label="User Id" type="number" placeholder="Entrer User Id"   step="any"    
                                                    class="" :error="isFieldValid('user_id')" :error-message="getFieldError('user_id')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Etat 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrletat" v-model.trim="formData.etat"  label="Etat" type="text" placeholder="Entrer Etat"      
                                                    class="" :error="isFieldValid('etat')" :error-message="getFieldError('etat')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Facturation 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlfacturation" v-model.trim="formData.facturation"  label="Facturation" type="text" placeholder="Entrer Facturation"      
                                                    class="" :error="isFieldValid('facturation')" :error-message="getFieldError('facturation')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Date 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate" v-model="formData.date" label="Date"    :error="isFieldValid('date')" :error-message="getFieldError('date')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.date" @input="$refs.ctrldate.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Pieces Jointes 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpieces_jointes" v-model.trim="formData.pieces_jointes"  label="Pieces Jointes" type="text" placeholder="Entrer Pieces Jointes"      
                                                    class="" :error="isFieldValid('pieces_jointes')" :error-message="getFieldError('pieces_jointes')">
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
			default: 'mescourses',
		},
		pageStoreKey: {
			type: String,
			default: 'MESCOURSES',
		},
		routeName: {
			type: String,
			default: 'mescoursesedit',
		},
		pagePath: {
			type : String,
			default : 'mescourses/edit',
		},
		apiPath: {
			type: String,
			default: 'mescourses/edit',
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
		n_facture: "", heure_depart: new Date(), lieu_depart: "", lieu_arrivee: "", km_jour: "", km_nuit: "", forfait_tarif: "", attente: "", nb_patients: "", tpmr: "", payage: "", id_assure: "", user_id: "", etat: "", facturation: "", date: new Date(), pieces_jointes: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/mescourses`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			km_jour: { numeric },
		km_nuit: { numeric },
		forfait_tarif: { numeric },
		attente: { numeric },
		nb_patients: { numeric },
		payage: { numeric },
		id_assure: { numeric },
		user_id: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
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
