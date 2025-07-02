<template>
    <q-page class="main-page"  id="index-page">
        <section class="page-section q-mt-lg" >
            <div class="container-fluid">
                <div class="row justify-center q-col-gutter-md">
                    <div  class="col-12 col-sm-6 col-md-3 comp-grid" >
                        <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                            <div class="row justify-center q-col-gutter-md items-center">
                                <div>
                                    <q-avatar text-color="primary" font-size="48px" icon="account_circle"></q-avatar>
                                </div>
                                <div class="text-h6">BienVenue GestPRO</div>
                            </div>
                        </q-card>
                        <q-card  :flat="isSubPage" class=" q-my-md q-pa-md nice-shadow-6 nice-shadow-6">
                            <div >
                                <q-form ref="observer" @submit.prevent="startLogin()">
                                <q-input class="q-mb-md" label="Nom d'utilisateur ou email" outlined dense placeholder="Nom d'utilisateur ou email" v-model.trim="formData.username"  required="required" type="text" >
                                <template v-slot:prepend>
                                    <q-icon name="account_circle"></q-icon>
                                </template>
                                </q-input>
                                <q-input label="Mot de passe"  class="q-mb-md" placeholder="Mot de passe" required="required" v-model="formData.password" type="password">
                                <template v-slot:prepend>
                                    <q-icon name="lock"></q-icon>
                                </template>
                                </q-input>
                                <div class="row q-mb-md">
                                    <div class="col-6">
                                        <q-checkbox v-model="rememberUser"> Souviens-toi de moi</q-checkbox>
                                    </div>
                                    <div class="col-6">
                                        <q-btn to="/index/forgotpassword" class="text-danger" flat no-caps color="negative"> Réinitialiser le mot de passe</q-btn>
                                    </div>
                                </div>
                                <transition appear enter-active-class="animated bounceIn" leave-active-class="animated fadeOut">
                                    <q-banner dense  inline-actions rounded  class="bg-red-2 q-my-md" v-if="loginErrorMsg">
                                        <template v-slot:avatar>
                                            <q-icon color="red" name="error"></q-icon>
                                        </template>
                                        {{ loginErrorMsg }}
                                        <template v-slot:action>
                                            <q-btn @click="loginErrorMsg = null" dense flat icon="close" />
                                            </template>
                                        </q-banner>
                                    </transition>
                                    <div class="text-center">
                                        <q-btn label="S'identifier"  :loading="loading" color="primary" icon="lock_open" class="full-width"  type="submit"> 
                                        </q-btn>
                                    </div>
                                    </q-form>
                                </div>
                            </q-card>
                            <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                <div class="row justify-between items-center">
                                    <div class="col">
                                        Vous n'avez pas de compte?
                                    </div>
                                    <div class="col-auto">
                                        <q-btn icon="account_box" label="Registre" color="positive" class="full-width" to="/index/register">
                                        </q-btn>
                                        <q-btn
                                            v-if="isAndroid"
                                            label="Télécharger Notre App Android"
                                            icon="android"
                                            color="primary"
                                            @click="downloadApp('android')"
                                            />
                                            <q-btn
                                                v-if="isIOS"
                                                label="Télécharger Notre App iOS"
                                                icon="apple"
                                                color="primary"
                                                @click="downloadApp('ios')"
                                                />
                                            </div>
                                        </div>
                                    </q-card>
                                </div>
                            </div>
                        </div>
                    </section>
                </q-page>
            
</template>
<script setup>
	import {  computed, ref, reactive, onMounted } from 'vue';
	import { useApp } from 'src/composables/app';
	import { useAuth } from 'src/composables/auth';
	
	import { useRoute, useRouter } from 'vue-router';
	
	
	const props = defineProps({
		pageName: {
			type: String,
			default: 'index',
		},
		routeName: {
			type: String,
			default: 'index',
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	const route = useRoute();
	const router = useRouter();
	const auth = useAuth();
	const app = useApp();
	const formData = reactive({
		username: '',
		password:'',
	});
	const pageReady = ref(true);
	const loading = ref(false);
	const loginErrorMsg = ref('');
	const rememberUser = ref(false);
	async function startLogin (){
		try{
			loading.value = true;
			loginErrorMsg.value = '';
			let url = "/auth/login";
			let payload = {
				formData,
				rememberUser:rememberUser.value,
				url
			};
			const loginData= await auth.login(payload);
			loading.value = false;
			if (loginData.token) {
				let nextUrl = route.query.nexturl || '/home'
				router.go(nextUrl);
			}
			else{
				router.push(loginData.nextpage);
			}
		}
		catch(error){
			loading.value = false;
			loginErrorMsg.value = error.request?.response || "Unable to establish connection...";
		}
	}
	const isAndroid = ref(false);
const isIOS = ref(false);
const detectDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent)) {
        isAndroid.value = true;
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        isIOS.value = true;
    }
};
const downloadApp = (platform) => {
    if (platform === 'android') {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.votreapp.android';
        } else if (platform === 'ios') {
        window.location.href = 'https://apps.apple.com/app/id123456789';
    }
};
onMounted(() => {
    detectDevice();
});

</script>
<style>
</style>
