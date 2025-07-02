<template>
    <q-page class="main-page"  id="">
        <q-card  :flat="isSubPage" class="page-section q-pa-md nice-shadow-6" >
            <div class="container">
                <div class="row q-col-gutter-x-md">
                    <div  class="col comp-grid" >
                        <q-card class="">
                            <div class="" >
                                <div class="row  items-center q-col-gutter-sm q-px-sm">
                                    <div class="col-auto">
                                        <q-avatar class="q-mr-sm" font-size="25px" size="40px"  text-color="" icon="dashboard" />
                                        </div>
                                        <div class="col">
                                            <div class="text-h6 text-bold">Mon Tableau de Bord</div>
                                        </div>
                                    </div>
                                </div>
                            </q-card>
                        </div>
                    </div>
                </div>
            </q-card>
            <q-card  :flat="isSubPage" class="page-section q-mb-md nice-shadow-6" >
                <div class="container-fluid">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-4 col-sm-12 col-lg-4 col-md-6 comp-grid" >
                            <div class="q-mb-sm">
                                <record-count api-path="components_data/getcount_courses" max="" v-slot="record">
                                <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/courses`" padding="md" class="full-width animated zoomIn" >
                                    <q-icon class=" q-mr-md" color="primary" style="opacity:1" size="40px" name="local_taxi"></q-icon>
                                    <div class="flex-column text-left">
                                        <div class="text-bold">Courses</div>
                                        <div class="text-caption">Total Courses</div>
                                    </div>
                                    <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                        <span v-if="!record.loading">{{ record.num }}</span>
                                        <q-spinner v-else size="14px" />
                                    </div>
                                </q-btn>
                                </record-count>
                            </div>
                        </div>
                        <div  class="col-4 col-sm-12 col-lg-4 col-md-6 comp-grid" >
                            <div class="q-mb-sm">
                                <record-count api-path="components_data/getcount_mesrendezvous" max="" v-slot="record">
                                <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/agenda`" padding="md" class="full-width animated zoomIn" >
                                    <q-icon class=" q-mr-md" color="primary" style="opacity:1" size="40px" name="event_note"></q-icon>
                                    <div class="flex-column text-left">
                                        <div class="text-bold">Mes Rendez-vous</div>
                                        <div class="text-caption">Total Agenda</div>
                                    </div>
                                    <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                        <span v-if="!record.loading">{{ record.num }}</span>
                                        <q-spinner v-else size="14px" />
                                    </div>
                                </q-btn>
                                </record-count>
                            </div>
                        </div>
                        <div  class="col-4 col-sm-12 col-lg-4 col-md-6 comp-grid" >
                            <div class="q-mb-sm">
                                <record-count api-path="components_data/getcount_mesassurs" max="" v-slot="record">
                                <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/assure`" padding="md" class="full-width animated zoomIn" >
                                    <q-icon class=" q-mr-md" color="blue" style="opacity:1" size="40px" name="airline_seat_recline_extra"></q-icon>
                                    <div class="flex-column text-left">
                                        <div class="text-bold">Mes Assurés</div>
                                        <div class="text-caption">Total Assure</div>
                                    </div>
                                    <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                        <span v-if="!record.loading">{{ record.num }}</span>
                                        <q-spinner v-else size="14px" />
                                    </div>
                                </q-btn>
                                </record-count>
                            </div>
                        </div>
                        <div  class="col-4 col-sm-12 col-lg-4 col-md-6 comp-grid" >
                            <div class="q-mb-sm">
                                <record-count api-path="components_data/getcount_notes" max="" v-slot="record">
                                <q-btn align="left"  unelevated    :rounded="false"  block no-caps text-color="blue" color="blue-1" :to="`/notes`" padding="md" class="full-width animated zoomIn" >
                                    <q-icon class=" q-mr-md" color="primary" style="opacity:1" size="40px" name="event_note"></q-icon>
                                    <div class="flex-column text-left">
                                        <div class="text-bold">Notes</div>
                                        <div class="text-caption">Total Notes</div>
                                    </div>
                                    <div class="text-h5 absolute-top-right q-ma-md q-mt-lg">
                                        <span v-if="!record.loading">{{ record.num }}</span>
                                        <q-spinner v-else size="14px" />
                                    </div>
                                </q-btn>
                                </record-count>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card>
            <q-card  :flat="isSubPage" class="page-section q-mb-md nice-shadow-6" >
                <div class="container-fluid">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <q-card class="">
                                <div class="" >
                                    <div class="row  items-center q-col-gutter-sm q-px-sm">
                                        <div class="col-auto">
                                            <q-avatar class="q-mr-sm" font-size="25px" size="40px"  text-color="" icon="insert_link" />
                                            </div>
                                            <div class="col">
                                                <div class="text-h6 text-bold">Liens Utiles</div>
                                            </div>
                                        </div>
                                    </div>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </q-card>
                <q-card  :flat="isSubPage" class="page-section q-mb-md nice-shadow-6" >
                    <div class="container">
                        <div class="row q-col-gutter-x-md">
                            <div  class="col-6 col-sm-6 col-md-2 comp-grid" >
                                <div class="q-mr-sm q-mr-sm q-mr-sm">
                                    <q-btn type="a" :href="`https://www.viamichelin.fr/web/Itineraires`"       :rounded="false"  size=""  color="primary" no-caps  unelevated push  class="full-width" >
                                        Lien Michelin 
                                    </q-btn>
                                </div>
                            </div>
                            <div  class="col-6 col-sm-6 col-md-2 comp-grid" >
                                <div class="q-mr-sm q-mr-sm q-mr-sm">
                                    <q-btn type="a" :href="`https://authps-espacepro.ameli.fr/`"   padding="" stack  flat :rounded="false"  size="md" color="primary" no-caps  unelevated   class="full-width" >
                                        <q-icon name="beenhere"></q-icon>                               
                                        Espace AmeliePRO 
                                    </q-btn>
                                </div>
                            </div>
                            <div  class="col-6 col-sm-6 col-md-2 comp-grid" >
                                <div class="q-mr-sm q-mr-sm q-mr-sm">
                                    <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/calculatrice`" class="full-width" >
                                        <q-icon name="content_paste"></q-icon>                              
                                        Ma Calculatrice 
                                    </q-btn>
                                </div>
                            </div>
                            <div  class="col-6 col-sm-6 col-md-2 comp-grid" >
                                <div class="q-mr-sm q-mr-sm q-mr-sm">
                                    <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/tarification`" class="full-width" >
                                        <q-icon name="euro_symbol"></q-icon>                                
                                        Simuler un Tarif 
                                    </q-btn>
                                </div>
                            </div>
                            <div  class="col-6 col-sm-6 col-md-2 comp-grid" >
                                <div class="q-mr-sm q-mr-sm q-mr-sm">
                                    <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/courses/add`" class="full-width" >
                                        <q-icon name="local_taxi"></q-icon>                             
                                        Nouvelle Course 
                                    </q-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card>
                <section class="page-section q-mb-md" >
                    <div class="container-fluid">
                        <div class="row q-col-gutter-x-md">
                            <div  class="col-auto col-sm-12 col-md-7 comp-grid" >
                                <q-card class="">
                                    <div class="">
                                        <div class="reset-grid">
                                            <list-agenda-page ref="agendaListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-AGENDA" is-sub-page>
                                                </list-agenda-page>
                                            </div>
                                        </div>
                                    </q-card>
                                </div>
                                <div  class="col-auto col-sm-12 col-md-5 comp-grid" >
                                    <q-card class="">
                                        <div class="">
                                            <div class="reset-grid">
                                                <list-notes-page ref="notesListPage"  :limit="10" :show-header="true" :show-breadcrumbs="true" :show-footer="true" :paginate="true" page-store-key="INDEX-NOTES" is-sub-page>
                                                    </list-notes-page>
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
	import { utils } from 'src/utils';
	import { ApiService } from 'src/services/api';
	import { useApp } from 'src/composables/app.js';
	import { useAuth } from 'src/composables/auth';
	
	import listAgendaPage from "../agenda/list.vue";
import listNotesPage from "../notes/list.vue";
	
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
	const auth = useAuth();
	const pageReady = ref(true);
	// Variables réactives
const ready = ref(false); 
const leads = reactive({
  submitting: false,
});
// Fonction pour récupérer les dates depuis l'API avec async/await
const getDates = async () => {
  leads.submitting = true;
  try {
      const response = await ApiService.get('home/getdates');
    if (response.data.success) {
      app.flashMsg('Date de contrôle technique : ' + auth.user.date_cteck);
      app.flashMsg('Date de visite médicale : ' + auth.user.date_vmedi);
      apiResponse.value = response.data.data;
    } else {
      app.flashMsg(response.data.msg, 'negative');
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    leads.submitting = false;
  }
};
// Fonction pour vérifier une date spécifique
const checkDate = (dateName, date) => {
  const now = new Date(utils.dateNow());
  const dateToCheck = new Date(date);
  const joursRestants = Math.ceil((dateToCheck - now) / (1000 * 60 * 60 * 24));
  if (joursRestants < 60) {
    app.flashMsg(`Attention : ${dateName} est dans moins de ${joursRestants} jours !`, 'warning');
  }
};
// Fonction pour vérifier plusieurs dates importantes
const checkDatesOnHomeClick = () => {
  checkDate("La Date de votre Contrôle Technique", auth.user.date_cteck);
  checkDate("La Date de la Visite médicale", auth.user.date_vmedi);
  checkDate("La Date de votre Formation continue", auth.user.date_fc);
  checkDate("La Date Révision Taxi M", auth.user.date_rev_taxi_m);
};
// Hook qui s'exécute au montage du composant
onMounted(async () => {
  ready.value = true;
  await getDates(); // Récupère les dates avant de les vérifier
  checkDatesOnHomeClick();
}); 

</script>
<style scoped>
</style>
