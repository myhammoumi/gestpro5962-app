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
                                                    Commune 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcommune" v-model.trim="formData.commune"  label="Commune" type="text" placeholder="Entrer Commune"      
                                                    class="" :error="isFieldValid('commune')" :error-message="getFieldError('commune')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Code Postal 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcode_postal" v-model.trim="formData.code_postal"  label="Code Postal" type="number" placeholder="Entrer Code Postal"   step="any"    
                                                    class="" :error="isFieldValid('code_postal')" :error-message="getFieldError('code_postal')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Ligne 5 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlligne_5" v-model.trim="formData.ligne_5"  label="Ligne 5" type="text" placeholder="Entrer Ligne 5"      
                                                    class="" :error="isFieldValid('ligne_5')" :error-message="getFieldError('ligne_5')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Acheminement 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlacheminement" v-model.trim="formData.acheminement"  label="Acheminement" type="text" placeholder="Entrer Acheminement"      
                                                    class="" :error="isFieldValid('acheminement')" :error-message="getFieldError('acheminement')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Gps 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlgps" v-model.trim="formData.gps"  label="Gps" type="text" placeholder="Entrer Gps"      
                                                    class="" :error="isFieldValid('gps')" :error-message="getFieldError('gps')">
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
	import { required, numeric, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'cpsvillesfr',
		},
		pageStoreKey: {
			type: String,
			default: 'CPSVILLESFR',
		},
		routeName : {
			type : String,
			default : 'cpsvillesfradd',
		},
		apiPath : {
			type : String,
			default : 'cpsvillesfr/add',
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
				commune: "", code_postal: "", ligne_5: "", acheminement: "", gps: "", 
			})
		},
	});
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();// application state and methods
	
	const formData = reactive({ ...props.pageData });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			code_postal: { numeric }
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
			app.navigateTo(`/cpsvillesfr`);
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
