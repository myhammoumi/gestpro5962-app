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
                                                    Titre *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltitle" v-model.trim="formData.title"  label="Titre" type="text" placeholder="Entrer Titre"      
                                                    class="" :error="isFieldValid('title')" :error-message="getFieldError('title')">
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
                                                    Cp 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'cp')"  api-path="components_data/cp_option_list"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlcp" v-model="formData.cp" :options="req.response" label="Cp"  :error="isFieldValid('cp')" :error-message="getFieldError('cp')">
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ville 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="formData.ville = ''" :load-on-mount="false" :api-path="`components_data/ville_option_list?lookup_cp=${formData.cp}`"  v-slot="req">
                                                        <nice-select  @update:model-value="(val)=>villeAutofill(val)"   :loading="req.loading"   ref="ctrlville" v-model="formData.ville" :options="req.response" label="Ville"  :error="isFieldValid('ville')" :error-message="getFieldError('ville')">
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Date Debut *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate_debut" v-model="formData.date_debut" label="Date Debut"    :error="isFieldValid('date_debut')" :error-message="getFieldError('date_debut')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate_debut" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.date_debut" @input="$refs.ctrldate_debut.hide()" />
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
                                                    Date Fin 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate_fin" v-model="formData.date_fin" label="Date Fin"    :error="isFieldValid('date_fin')" :error-message="getFieldError('date_fin')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate_fin" transition-show="scale" transition-hide="scale">
                                                        <q-date @update:model-value="(val)=>dateFinAutofill(val)"   mask="YYYY-MM-DD" v-model="formData.date_fin" @input="$refs.ctrldate_fin.hide()" />
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
                                                    Heure Debut *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrltime_debut" v-model="formData.time_debut"    :error="isFieldValid('time_debut')" :error-message="getFieldError('time_debut')">
                                                    <template v-slot:append>
                                                        <q-icon name="access_time" class="cursor-pointer">
                                                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                        <q-time   mask="HH:mm" v-model="formData.time_debut" />
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
                                                    Heure de Fin *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrltime_fin" v-model="formData.time_fin"    :error="isFieldValid('time_fin')" :error-message="getFieldError('time_fin')">
                                                    <template v-slot:append>
                                                        <q-icon name="access_time" class="cursor-pointer">
                                                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                                                        <q-time   mask="HH:mm" v-model="formData.time_fin" />
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
                                                    Remarques 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlremarques" rows="5"  v-model="formData.remarques" placeholder="Entrer Remarques"    type="textarea" :error="isFieldValid('remarques')" :error-message="getFieldError('remarques')">
                                                    </q-input>
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
	import { required, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { ApiService } from 'src/services/api';
	import { utils } from 'src/utils';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'agenda',
		},
		pageStoreKey: {
			type: String,
			default: 'AGENDA',
		},
		routeName : {
			type : String,
			default : 'agendaadd',
		},
		apiPath : {
			type : String,
			default : 'agenda/add',
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
				title: "", lieu_depart: "", cp: "", ville: "", date_debut: new Date(), date_fin: new Date(), time_debut: new Date(), time_fin: new Date(), remarques: "", 
			})
		},
	});
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();// application state and methods
	
	const formData = reactive({ ...props.pageData });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			title: { required },
		date_debut: { required },
		time_debut: { required },
		time_fin: { required }
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
			app.navigateTo(`/agenda/agenda`);
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
			formData.date_debut = utils.dateNow();
			formData.date_fin = utils.dateNow();
			formData.time_debut = utils.timeNow();
			formData.time_fin = utils.timeNow();
	});
	
	//auto fill other inputs on ville change
	async function villeAutofill(val){
		const resp = await ApiService.get(`components_data/agenda_ville_autofill?value=${val}`);
		const data = resp.data[0];
		if(data){
formData.ville = data.ville;
		}
	}
	
	async function dateFinAutofill(val){
		formData.date_fin = formData.date_debut;
	}
	
	// expose page object for other components access
	defineExpose({
		page
	});
</script>
<style scoped>
</style>
