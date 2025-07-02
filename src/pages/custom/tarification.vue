<template>
    <q-page class="main-page"  id="">
        <section class="page-section q-pa-md" >
            <div class="container">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <div class="" >
                            <div class="row  items-center q-col-gutter-sm q-px-sm">
                                <div class="col-auto">
                                    <q-avatar class="q-mr-sm" font-size="25px" size="40px"  text-color="" icon="credit_card" />
                                    </div>
                                    <div class="col">
                                        <div class="text-h6 text-bold">Simulateur de la Tarification</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page-section q-mt-sm q-mb-sm q-ml-sm q-mr-sm" >
                <div class="container">
                    <div class="row justify-center q-col-gutter-x-md">
                        <div  class="col-10 col-sm-12 col-lg-6 col-md-12 comp-grid" >
                            <q-card class="">
                                <div class="text-center ">
                                    <div class="container">
                                        <!-- Formulaire de simulation -->
                                        <form @submit.prevent="calculateCost" class="q-pa-md">
                                            <!-- Sélection de la Convention -->
                                            <div class="q-gutter-md q-mb-md">
                                                <div class="row">
                                                    <div class="col-12 col-md-4">
                                                        <label class="font-weight-bold">Sélectionner la Convention</label>
                                                    </div>
                                                    <div class="col-12 col-md-8">
                                                        <api-data-source
                                                            @loaded="response => mapOptionField(response, 'zone')"
                                                            api-path="components_data/zone_option_list"
                                                            v-slot="req"
                                                            >
                                                            <q-btn-toggle
                                                            ref="ctrlzone"
                                                            v-model="zone"
                                                            :options="req.response"
                                                            toggle-color="positive"
                                                            color="grey-7"
                                                            no-caps
                                                            unelevated
                                                            />
                                                        </api-data-source>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            <!-- Sélection de la Tarification -->
                                            <div class="q-gutter-md q-mb-md">
                                                <div class="row">
                                                    <div class="col-12 col-md-4">
                                                        <label class="font-weight-bold">Forfait Tarif</label>
                                                    </div>
                                                    <div class="col-12 col-md-8">
                                                        <api-data-source
                                                            @loaded="formData.forfait_tarif = ''"
                                                            :load-on-mount="false"
                                                            :api-path="`components_data/forfait_tarif_option_list?lookup_zone=${zone}`"
                                                            v-slot="req"
                                                            >
                                                            <q-btn-toggle
                                                            ref="ctrlforfait_tarif"
                                                            v-model="tarif"
                                                            :options="req.response"
                                                            toggle-color="positive"
                                                            color="grey-7"
                                                            no-caps
                                                            unelevated
                                                            />
                                                        </api-data-source>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            <!-- Sélection des Remises -->
                                            <div  class="q-gutter-md q-mb-md">
                                                <div class="row">
                                                    <div class="col-12 col-md-4">
                                                        <label class="font-weight-bold">Remises</label>
                                                    </div>
                                                    <div class="col-12 col-md-8">
                                                        <api-data-source
                                                            @loaded="formData.remises = ''"
                                                            :load-on-mount="false"
                                                            :api-path="`components_data/remises_option_list?lookup_zone=${zone}`"
                                                            v-slot="req"
                                                            >
                                                            <nice-select
                                                            :loading="req.loading"
                                                            ref="ctrlremises"
                                                            v-model="remise"
                                                            :options="req.response"
                                                            label="Remises"
                                                            lazy-rules
                                                            :rules="[
                                                            val => val !== null && val !== '' || 'Merci de saisir la remise',
                                                            val => val > 0 && val < 100 || 'Please type a valid value'
                                                            ]"
                                                            />
                                                        </api-data-source>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            <!-- Prise en charge (PEC) -->
                                            <div  class="col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        <label class="font-weight-bold">Prise en Charge</label>
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <api-data-source 
                                                            @loaded="formData.pec = ''" 
                                                            :load-on-mount="false" 
                                                            :api-path="`components_data/pec_option_list?lookup_zone=${zone}`"  
                                                            v-slot="req">
                                                            <nice-select :loading="req.loading" ref="ctrlpec" v-model="pec" :options="req.response" label="PEC" />
                                                        </api-data-source>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            <!-- Perception Min -->
                                            <div  class="col-12">
                                                <div class="row">
                                                    <div class="col-sm-3 col-12">
                                                        <label class="font-weight-bold">Perception Min :</label>
                                                    </div>
                                                    <div class="col-sm-9 col-12">
                                                        <api-data-source @loaded="formData.minperc = ''" :load-on-mount="false" :api-path="`components_data/minperc_option_list?lookup_zone=${zone}`" v-slot="req">
                                                            <nice-select :loading="req.loading" ref="ctrlminperc" v-model="minperc" :options="req.response" label="Perception min" />
                                                        </api-data-source>
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            <!-- Sélection de la Distance -->
                                            <div  class="q-gutter-md q-mb-md">
                                                <div class="row">
                                                    <div class="col-12 col-md-4">
                                                        <label class="font-weight-bold">Sélectionner la distance</label>
                                                    </div>
                                                    <div class="col-12 col-md-8">
                                                        <q-input
                                                        filled
                                                        v-model="distance"
                                                        label="Saisir la Distance (en km):"
                                                        lazy-rules
                                                        :rules="[val => val && val.length > 0 || 'Please type something']"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Bouton de soumission -->
                                            <!-- Résultats de la simulation -->
                                            <div  v-if="result.coutTotal" class="card q-pa-md">
                                                <h5><p>Estimation Coût total : {{ result.coutTotal }}€</p></h5>
                                                <p>Part Sécurité sociale (55%) : {{ result.partSecu }}€</p>
                                                <p>Part Mutuelle ou Client (45%) : {{ result.partMutuelClient }}€</p>
                                                <p>F1 Minimum perception : {{ minperc }}€</p>
                                            </div>
                                            <div class="text-center q-my-md">
                                                <q-btn type="submit" color="primary" label="Calculer" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </section>
                <q-separator class="q-my-sm"></q-separator>
            </q-page>
        
</template>
<script setup>
	import {  computed, ref } from 'vue';
	
	
	import { useApp } from 'src/composables/app.js';
	
	
	
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
	// Déclaration des variables réactives
const distance = ref(null);
const tarif = ref(null);
const pec = ref(null);
const remise = ref(null);
const result = ref({});
const zone = ref(null);
const remises = ref(null);
const forfait_tarif = ref(null);
const minperc = ref(null);
// Méthode de calcul du coût
const calculerCout = (distance, tarif, pec, remiseConvention) => {
    let pecValue = parseFloat(pec.replace(',', '.')) || 0;
    let coutInitial = distance * tarif + pecValue;
    let coutAvecRemise = coutInitial - (coutInitial * remiseConvention / 100);
    
    let partSecu = (coutAvecRemise * 0.55).toFixed(2);
    let partMutuelClient = (coutAvecRemise * 0.45).toFixed(2);
    let coutTotal = coutAvecRemise.toFixed(2);
    
    return {
        coutTotal: coutTotal,
        partSecu: partSecu,
        partMutuelClient: partMutuelClient
    };
};
// Fonction pour calculer le coût
// Fonction pour calculer le coût avec validation
const calculateCost = () => {
    if (!distance.value) {
        app.flashMsg('Erreur', 'Veuillez saisir la distance', 'warning');
        } else if (!tarif.value) {
        app.flashMsg('Erreur', 'Veuillez sélectionner un tarif', 'warning');
        } else if (!pec.value) {
        app.flashMsg('Erreur', 'Veuillez saisir la prise en charge (PEC)', 'warning');
        } else if (!remise.value) {
        app.flashMsg('Erreur', 'Veuillez sélectionner une remise', 'warning');
        } else {
        result.value = calculerCout(distance.value, tarif.value, pec.value, remise.value);
        app.flashMsg('Succès', 'Calcul effectué avec succès ', 'positive');
    }
};
// Fonction pour retourner à la page d'accueil
const retourPageHome = () => {
    app.push('/home');
};

</script>
<style scoped>
.container {
  max-width: 900px;
  margin: auto;
}
.q-gutter-md {
  margin-bottom: 16px;
}
.font-weight-bold {
  font-weight: bold;
}
</style>
