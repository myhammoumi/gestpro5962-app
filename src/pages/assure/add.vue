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
                                                    Gender 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-field  borderless   :error="isFieldValid('gender')" :error-message="getFieldError('gender')">
                                                    <q-option-group  ref="ctrlgender" v-model="formData.gender" :options="app.menus.gender"  inline size="md" ></q-option-group>
                                                    </q-field>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nom *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnom" v-model.trim="formData.nom"  label="Nom" type="text" placeholder="Entrer Nom"      
                                                    class="" :error="isFieldValid('nom')" :error-message="getFieldError('nom')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Prenom *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlprenom" v-model.trim="formData.prenom"  label="Prenom" type="text" placeholder="Entrer Prenom"      
                                                    class="" :error="isFieldValid('prenom')" :error-message="getFieldError('prenom')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Adresse 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrladresse" v-model.trim="formData.adresse"  label="Adresse" type="text" placeholder="Entrer Adresse"      
                                                    class="" :error="isFieldValid('adresse')" :error-message="getFieldError('adresse')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Code Postale 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <api-data-source @loaded="response => mapOptionField(response, 'cp')"  api-path="components_data/cp_option_list"  v-slot="req">
                                                        <nice-select     :loading="req.loading"   ref="ctrlcp" v-model="formData.cp" :options="req.response" label="Code Postale"  :error="isFieldValid('cp')" :error-message="getFieldError('cp')">
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
                                                        <nice-select     :loading="req.loading"   ref="ctrlville" v-model="formData.ville" :options="req.response" label="Ville"  :error="isFieldValid('ville')" :error-message="getFieldError('ville')">
                                                        </nice-select>  
                                                    </api-data-source>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tel 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltel" v-model.trim="formData.tel"  label="Tel" type="text" placeholder="Entrer Tel"      
                                                    class="" :error="isFieldValid('tel')" :error-message="getFieldError('tel')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlemail" v-model.trim="formData.email"  label="Email" type="email" placeholder="Entrer Email"      
                                                    class="" :error="isFieldValid('email')" :error-message="getFieldError('email')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Num Securité Sociale 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnum_secu" v-model.trim="formData.num_secu"  label="Num Securité Sociale" type="text" placeholder="Entrer Num Securité Sociale"      
                                                    class="" :error="isFieldValid('num_secu')" :error-message="getFieldError('num_secu')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Num Amc 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnum_amc" v-model.trim="formData.num_amc"  label="Num Amc" type="text" placeholder="Entrer Num Amc"      
                                                    class="" :error="isFieldValid('num_amc')" :error-message="getFieldError('num_amc')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Caisse 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcaisse" v-model.trim="formData.caisse"  label="Caisse" type="text" placeholder="Entrer Caisse"      
                                                    class="" :error="isFieldValid('caisse')" :error-message="getFieldError('caisse')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Mutuelle 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmutuelle" v-model.trim="formData.mutuelle"  label="Mutuelle" type="text" placeholder="Entrer Mutuelle"      
                                                    class="" :error="isFieldValid('mutuelle')" :error-message="getFieldError('mutuelle')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Date Naissance 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrldate_naissance" v-model.trim="formData.date_naissance"  label="Date Naissance" type="text" placeholder="Entrer Date Naissance"      
                                                    class="" :error="isFieldValid('date_naissance')" :error-message="getFieldError('date_naissance')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nom Compagnon 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnom_compagnon" v-model.trim="formData.nom_compagnon"  label="Nom Compagnon" type="text" placeholder="Entrer Nom Compagnon"      
                                                    class="" :error="isFieldValid('nom_compagnon')" :error-message="getFieldError('nom_compagnon')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Tel Compagnon 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltel_compagnon" v-model.trim="formData.tel_compagnon"  label="Tel Compagnon" type="text" placeholder="Entrer Tel Compagnon"      
                                                    class="" :error="isFieldValid('tel_compagnon')" :error-message="getFieldError('tel_compagnon')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Adresse Compagnon 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrladresse_compagnon" v-model.trim="formData.adresse_compagnon"  label="Adresse Compagnon" type="text" placeholder="Entrer Adresse Compagnon"      
                                                    class="" :error="isFieldValid('adresse_compagnon')" :error-message="getFieldError('adresse_compagnon')">
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
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Pieces Jointes 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <div class="q-mb-sm">
                                                        <q-uploader-input :max-files="5" :max-file-size="3" accept=".jpg,.png,.gif,.jpeg,.docx,.doc,.xls,.xlsx,.pdf" :multiple="false" delete-icon="clear" style="width:100%" label="Choisissez des fichiers ou déposez des fichiers ici" upload-path="fileuploader/upload/pieces_jointes" v-model="formData.pieces_jointes"></q-uploader-input>
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
	import { required, email, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'assure',
		},
		pageStoreKey: {
			type: String,
			default: 'ASSURE',
		},
		routeName : {
			type : String,
			default : 'assureadd',
		},
		apiPath : {
			type : String,
			default : 'assure/add',
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
				gender: "", nom: "", prenom: "", adresse: "", cp: "", ville: "", tel: "", email: "", num_secu: "", num_amc: "", caisse: "", mutuelle: "", date_naissance: "", nom_compagnon: "", tel_compagnon: "", adresse_compagnon: "", remarques: "", pieces_jointes: "", 
			})
		},
	});
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();// application state and methods
	
	const formData = reactive({ ...props.pageData });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nom: { required },
		prenom: { required },
		email: { email }
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
			app.navigateTo(`/assure`);
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
