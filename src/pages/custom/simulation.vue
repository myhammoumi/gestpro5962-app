<template>
    <q-page class="main-page"  id="">
        <section class="page-section q-pa-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <div class=" text-h6 text-bold" >
                            simulation
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section q-mb-md" >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <div class="">
                            <div>
                                <q-page  class="main-page">
                                    <section class="page-section q-mb-md" >
                                        <div class="container">
                                            <div class="row q-col-gutter-x-md justify-center">
                                                <div class="col col-sm-12 col-lg-8 col-md-10 comp-grid" >
                                                    <q-card  :flat="isSubPage" class=" nice-shadow-18">
                                                        <div >
                                                            <div>
                                                                <!-- Formulaire -->
                                                                <h4>Convention 62</h4>
                                                                <form @submit.prevent="calculateCost">
                                                                    <q-input
                                                                    filled
                                                                    class="q-gutter-md"
                                                                    v-model="distance"
                                                                    label="Saisir la Distance (en km):"
                                                                    lazy-rules
                                                                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                                                                    />
                                                                    <q-input
                                                                    filled
                                                                    v-model="pec"
                                                                    label="Prise en charge (PEC):"
                                                                    lazy-rules
                                                                    :rules="[ val => val && val.length > 0 || 'Merci de saisir la prise en charge']"
                                                                    />
                                                                    Selectionner Le Tarif
                                                                    <q-btn-toggle
                                                                    v-model="tarif"
                                                                    spread
                                                                    no-caps
                                                                    toggle-color="primary"
                                                                    color="white"
                                                                    text-color="black"
                                                                    :options="[
                                                                    {label: 'Tarif A', value: '1.10'},
                                                                    {label: 'Tarif B', value: '1.41'},
                                                                    {label: 'Tarif C', value: '2.20'},
                                                                    {label: 'Tarif D', value: '2.82'}
                                                                    ]"
                                                                    />
                                                                    Selectionner La Remise
                                                                    <q-btn-toggle
                                                                    v-model="remise"
                                                                    spread
                                                                    no-caps
                                                                    toggle-color="primary"
                                                                    color="white"
                                                                    text-color="black"
                                                                    :options="[
                                                                    {label: '15.3% Hospitalisation, hôpital de jour, chimio, radiothérapie', value: '15.3'},
                                                                    {label: '19.2% Consultation, IRM, Scanner, Kiné', value: '19.2'},
                                                                    {label: '25% Transport simultané 2 personnes', value: '25'},
                                                                    {label: '37% Transport simultané 3 personnes', value: '37'}
                                                                    ]"
                                                                    lazy-rules
                                                                    :rules="[
                                                                    val => val !== null && val !== '' || 'Merci de saisir la remise',
                                                                    val => val > 0 && val < 100 || 'Please type a real age'
                                                                    ]"
                                                                    />
                                                                    <div  class="text-center q-my-md">
                                                                        <q-btn type="submit" color="primary" label="Calculer" />
                                                                            <q-btn @click="retourPageHome" color="primary" label="Retour à la page d'accueil" />
                                                                            </div>
                                                                            <!-- Afficher les résultats -->
                                                                            <div v-if="result.coutTotal">
                                                                                <h3>Résultat</h3>
                                                                                <p>Coût total : {{ result.coutTotal.toFixed(2) }}€</p>
                                                                                <p>Part Sécurité sociale (55%) : {{ result.partSecu.toFixed(2) }}€</p>
                                                                                <p>Part Mutuel ou Client (45%) : {{ result.partMutuelClient.toFixed(2) }}€</p>
                                                                                <p>F1 Minimum perception Jour : 15€</p>
                                                                                <p >F2 Minimum perception Nuit : 22€</p>
                                                                                <p></p>
                                                                            </div>
                                                                        </form>
                                                                    </div> 
                                                                </div>
                                                            </q-card>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </q-page>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
	const distance = ref(null);
const tarif = ref(null);
const pec = ref('2.52');
const pec2 = ref('2.55');
const remise = ref(null);
const result = ref({});
// Fonction pour calculer le coût
const calculerCout = (distance, tarif, pec, remiseConvention) => {
  // Convertir pec en nombre en remplaçant les virgules par des points
  let pecValue = parseFloat(pec.replace(',', '.')) || 0;
  let coutInitial = distance * tarif + pecValue;
  let coutAvecRemise = coutInitial - (coutInitial * remiseConvention / 100);
  let partSecu = coutAvecRemise * 0.55;
  let partMutuelClient = coutAvecRemise * 0.45;
  return {
    coutTotal: coutAvecRemise,
    partSecu: partSecu,
    partMutuelClient: partMutuelClient
  };
};
// Fonction pour calculer le coût si tous les champs sont renseignés
const calculateCost = () => {
  if (distance.value !== null && tarif.value !== null && pec.value !== null && remise.value !== null) {
    result.value = calculerCout(distance.value, tarif.value, pec.value, remise.value);
  } else {
    console.log("Veuillez remplir tous les champs.");
  }
};
// Fonction de calcul du coût et mise à jour du résultat
const calculer = () => {
  result.value = calculerCout(distance.value, tarif.value, pec.value, remise.value);
};
const retourPageHome = () => {
    this.$router.push('/home');
  };

</script>
<style scoped>
</style>
