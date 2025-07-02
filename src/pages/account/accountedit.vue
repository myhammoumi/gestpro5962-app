<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
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
                                                    Login *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrllogin" v-model.trim="formData.login"  label="Login" type="text" placeholder="Entrer Login"      
                                                    class="" :error="isFieldValid('login')" :error-message="getFieldError('login')">
                                                    </q-input>
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
                                                    Date Naissance 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate_naissance" v-model="formData.date_naissance" label="Date Naissance"    :error="isFieldValid('date_naissance')" :error-message="getFieldError('date_naissance')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate_naissance" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.date_naissance" @input="$refs.ctrldate_naissance.hide()" />
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
                                                    Entreprise 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlentreprise" v-model.trim="formData.entreprise"  label="Entreprise" type="text" placeholder="Entrer Entreprise"      
                                                    class="" :error="isFieldValid('entreprise')" :error-message="getFieldError('entreprise')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Infos 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlinfos" rows="5"  v-model="formData.infos" placeholder="Entrer Infos"    type="textarea" :error="isFieldValid('infos')" :error-message="getFieldError('infos')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Telephone 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltelephone" v-model.trim="formData.telephone"  label="Telephone" type="text" placeholder="Entrer Telephone"      
                                                    class="" :error="isFieldValid('telephone')" :error-message="getFieldError('telephone')">
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
                                                    Date Cteck 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate_cteck" v-model="formData.date_cteck" label="Date Cteck"    :error="isFieldValid('date_cteck')" :error-message="getFieldError('date_cteck')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate_cteck" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.date_cteck" @input="$refs.ctrldate_cteck.hide()" />
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
                                                    Date Vmedi 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate_vmedi" v-model="formData.date_vmedi" label="Date Vmedi"    :error="isFieldValid('date_vmedi')" :error-message="getFieldError('date_vmedi')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate_vmedi" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.date_vmedi" @input="$refs.ctrldate_vmedi.hide()" />
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
                                                    Date Fc 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate_fc" v-model="formData.date_fc" label="Date Fc"    :error="isFieldValid('date_fc')" :error-message="getFieldError('date_fc')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate_fc" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.date_fc" @input="$refs.ctrldate_fc.hide()" />
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
                                                    Date Rev Taxi M 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldate_rev_taxi_m" v-model="formData.date_rev_taxi_m" label="Date Rev Taxi M"    :error="isFieldValid('date_rev_taxi_m')" :error-message="getFieldError('date_rev_taxi_m')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldate_rev_taxi_m" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.date_rev_taxi_m" @input="$refs.ctrldate_rev_taxi_m.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
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
	import { required, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'utilisateurs',
		},
		pageStoreKey: {
			type: String,
			default: 'ACCOUNT',
		},
		routeName: {
			type: String,
			default: 'utilisateursaccountedit',
		},
		pagePath: {
			type : String,
			default : 'account/edit',
		},
		apiPath: {
			type: String,
			default: 'account/edit',
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
		login: "", nom: "", prenom: "", date_naissance: new Date(), entreprise: "", infos: "", telephone: "", adresse: "", date_cteck: new Date(), date_vmedi: new Date(), date_fc: new Date(), date_rev_taxi_m: new Date(), 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		location.reload();
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			login: { required },
		nom: { required },
		prenom: { required }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Mon compte"
		}
	});
	
	onMounted(()=>{ 
	});
</script>
<style scoped>
</style>
