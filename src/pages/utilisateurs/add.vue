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
                                                    Login *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate error-msg="Not available" v-model="formData.login" check-path="components_data/utilisateurs_login_exist/" v-slot="checker">
                                                    <q-input   ref="ctrllogin" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.login"  label="Login" type="text" placeholder="Entrer Login"      
                                                    class="" :error="isFieldValid('login') || checker.alreadyExist" :error-message="getFieldError('login') || checker.errorMsg">
                                                    </q-input>
                                                    </check-duplicate>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Password *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpassword" v-model="formData.password"  label="Password" :type="isPwd ? 'password' : 'text'" placeholder="Entrer Password"      
                                                    class="" :error="isFieldValid('password')" :error-message="getFieldError('password')">
                                                    <template v-slot:append>
                                                        <q-icon
                                                        :name="isPwd ? 'visibility_off' : 'visibility'"
                                                        class="cursor-pointer"
                                                        @click="isPwd = !isPwd"
                                                        />
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Confirm Password *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlconfirmpassword" v-model="formData.confirm_password" :type="isCPwd ? 'password' : 'text'" label="Confirmez le mot de passe" placeholder="Confirmez le mot de passe"  :error="isFieldValid('confirm_password')" :error-message="getFieldError('confirm_password')">
                                                    <template v-slot:append>
                                                        <q-icon
                                                        :name="isCPwd ? 'visibility_off' : 'visibility'"
                                                        class="cursor-pointer"
                                                        @click="isCPwd = !isCPwd"
                                                        />
                                                    </template>
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <check-duplicate error-msg="Not available" v-model="formData.email" check-path="components_data/utilisateurs_email_exist/" v-slot="checker">
                                                    <q-input   ref="ctrlemail" @blur="checker.check" :loading="checker.loading" v-model.trim="formData.email"  label="Email" type="email" placeholder="Entrer Email"      
                                                    class="" :error="isFieldValid('email') || checker.alreadyExist" :error-message="getFieldError('email') || checker.errorMsg">
                                                    </q-input>
                                                    </check-duplicate>
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
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    User ou Admin ? 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <nice-select        ref="ctrluser_role_id" v-model="formData.user_role_id" :options="app.menus.userRoleId" label="User ou Admin ?"  :error="isFieldValid('user_role_id')" :error-message="getFieldError('user_role_id')">
                                                    </nice-select>  
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
	import { required, email, sameAs, } from 'src/services/validators';
	import { usePageStore } from 'src/stores/page';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useAddPage } from 'src/composables/addpage';
	
	const props = defineProps({
		pageName : {
			type : String,
			default : 'utilisateurs',
		},
		pageStoreKey: {
			type: String,
			default: 'UTILISATEURS',
		},
		routeName : {
			type : String,
			default : 'utilisateursadd',
		},
		apiPath : {
			type : String,
			default : 'utilisateurs/add',
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
				login: "", password: "", confirm_password: "", email: "", nom: "", prenom: "", date_naissance: new Date(), entreprise: "", infos: "", telephone: "", adresse: "", date_cteck: new Date(), date_vmedi: new Date(), date_fc: new Date(), date_rev_taxi_m: new Date(), user_role_id: "", 
			})
		},
	});
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();// application state and methods
	
	const formData = reactive({ ...props.pageData });
	
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			login: { required },
		password: { required },
		confirm_password: {required, sameAs: sameAs(formData.password, 'Password') },
		email: { required, email },
		nom: { required },
		prenom: { required }
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
			app.navigateTo(`/utilisateurs`);
		}
	}
	
	const {  saving, pageReady, isPwd, isCPwd, } = toRefs(page.state);
	
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
