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
                                    Vue Cours
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <q-card  :flat="isSubPage" class="page-section q-mb-md nice-shadow-6" >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-10 col-sm-12 col-md-10 comp-grid" >
                            <q-card class="">
                                <q-card  :flat="isSubPage" class=" nice-shadow-6">
                                    <div class="q-pa-md">
                                        <div class="main-page">
                                            <section class="page-section q-mb-md">
                                                <div class="container-fluid">
                                                    <div class="row q-col-gutter-x-md">
                                                        <div class="col comp-grid">
                                                            <div class="relative-position" style="min-height:100px">
                                                                <div class="text-h6 text-center text-bold">ANNEXE 4 - ANNEXE A LA FACTURE VALANT ATTESTATION DE SERVICE FAIT</div>
                                                                <div class="text-h8 text-center text-bold">En application de l'article 7.2, cette annexe signée par le patient est transmise par l'entreprise de taxi conventionnée afin d'attester de la réalité de la réalisation du transport du patient</div>
                                                                <br>
                                                                <br>
                                                                <div class="row q-col-gutter-x-md">
                                                                    <!-- Page Content Here -->
                                                                    <div class="col">
                                                                        <q-card class="my-card">
                                                                            <div class="text-h6">RENSEIGNEMENTS CONCERNANT L'ASSURÉ(E)</div>
                                                                            <div class="text-h7" v-if="item.assure_num_secu"><strong>Numéro de sécurité sociale :</strong> {{ item.assure_num_secu }}</div>
                                                                            <div class="text-h7" v-if="item.assure_num_secu2"><strong>Numéro de sécurité sociale 2 :</strong> {{ item.assure_num_secu2 }}</div>
                                                                            <div class="text-h7"><strong>Date de Naissance :</strong> {{ item.assure_date_naissance }}</div>
                                                                            <div class="text-h7"><strong>Nom patronymique (nom de naissance) :</strong> {{ item.assure_nom }}</div>
                                                                            <div class="text-h7"><strong>Prénoms :</strong> {{ item.assure_prenom }}</div>
                                                                            <div class="text-h7"><strong>N° Téléphone :</strong> {{ item.assure_tel }}</div>
                                                                            <div class="text-h7"><strong>Nom Mutuelle et AMC :</strong> {{ item.assure_mutuelle }}, AMC : {{ item.assure_num_amc }}</div>
                                                                            <div class="text-h7"><strong>Mutuelle :</strong> {{ item.assure_mutuelle }}</div>
                                                                            <div class="text-h8"><strong>Adresse :</strong> {{ item.assure_adresse }}, {{ item.assure_cp }}, {{ item.assure_ville }}</div>
                                                                            <q-separator dark />
                                                                        </q-card>
                                                                    </div>
                                                                    <div class="col">
                                                                        <q-card class="my-card">
                                                                            <div class="text-h6">IDENTIFICATION DE L'ENTREPRISE</div>
                                                                            <div class="text-h7" v-if="item.assure_num_secu"><strong>Nom :</strong> {{ item.utilisateurs_nom }}</div>
                                                                            <div class="text-h7" v-if="item.assure_num_secu"><strong>Prénom :</strong> {{ item.utilisateurs_prenom }}</div>
                                                                            <div class="text-h7" v-if="item.assure_num_secu"><strong>Entreprise :</strong> {{ item.utilisateurs_entreprise }}</div>
                                                                        </q-card>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="q-pa-md">
                                                                <q-card class="my-card">
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>Date:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{  formatDate(item.date_created) }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>Départ</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.lieu_depart }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>(Heure)</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.heure_depart }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>Arrivée: </q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.lieu_arrivee }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption> Heure: </q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.heure_arrivee }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>KM Jour:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.km_jour }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>KM Nuit:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.km_nuit }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>Forfait:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.forfait_tarif }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>Attente:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.attente }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>Nb patients:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.nb_patients }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>TPMR:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.tpmr }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                        <div class="col">
                                                                            <q-item>
                                                                                <q-item-section>
                                                                                    <q-item-label caption>Péage:</q-item-label>
                                                                                    <q-item-label class="text-bold">{{ item.payage }}</q-item-label>
                                                                                </q-item-section>
                                                                            </q-item>
                                                                        </div>
                                                                    </div>
                                                                </q-card>
                                                            </div>
                                                            <div class="text-h6 text-left text-bold">ATTESTATION DE L'ASSURE(E)</div>
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <div class="text-h6 text-left text-bold">
                                                                L'assuré(e), ou la personne transportée, ou son représentant légal, atteste de la réalité et des conditions du (des) transports détaillé(s) ci-dessus.
                                                            </div>
                                                            <div class="text-h6 text-left text-bold">Fait à ................................. Le ................................... Signature Patient</div>
                                                            <div class="card">
                                                                <div class="card-body" >
                                                                    <!-- this is form to inser new Signature -->
                                                                    <form action="" class="card-img-top" @submit.prevent="saveSignature" method="POST" autocomplete="off" >
                                                                        <!-- we used vueSignature , so write in form vueSignature -->
                                                                        <vueSignature ref="signature" id="sig"   :sigOption="signaturePadOptions" :disabled="disabled" :defaultUrl="item.signature">
                                                                        </vueSignature>
                                                                    </form>
                                                                    <!-- this button is to insert new data or clear -->
                                                                    <div>
                                                                        <button @click="saveSignature(item.id_annexe)" variant="success">Sauvegarder La Signature</button>
                                                                        <button @click="clearSignature(item.id_annexe)" variant="info">Supprimer la Signature</button>
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <div class="text-h8 text-center text-bold">
                                                                Le Directeur de la Caisse d'Assurance Maladie, Le Représentant légal de l'entreprise, M. Jean-Luc BOCQUET
                                                            </div>
                                                            <q-separator></q-separator>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div  class=" row q-col-gutter-xs justify-start q-ma-md">
                                            <template v-if="auth.canManage('', item.user_id)">
                                                <div><q-btn icon="edit" label="Edit"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Modifier"  @click="app.openPageDialog({ page:'courses/edit', url: `/courses/edit/${item.id_annexe}` , closeBtn: true })">
                                                </q-btn></div>
                                            </template>
                                        </div>
                                        <!-- page footer template-->
                                        <div class="">
                                            <div  v-show="pageReady">
                                                <div class="row items-center justify-between">
                                                    <div class="row items-center q-col-gutter-md">
                                                        <div>
                                                            <q-btn  :rounded="false"  no-caps  unelevated   color="accent" class="q-my-xs" @click="exportPage()" label="Exportation"  title="Exportation" icon="print">
                                                            </q-btn>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </q-card>
                            </q-card>
                        </div>
                    </div>
                </div>
            </q-card>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col comp-grid" >
                            <div >
                                <div class="q-pa-md">
                                    <div class="q-mb-3 row justify-start q-col-gutter-sm">
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Id Annexe</div>
                                                        <div class="text-bold">{{ item.id_annexe }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">N Facture</div>
                                                        <div class="text-bold">{{ item.n_facture }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Heure Prise en Charge</div>
                                                        <div class="text-bold">{{ item.heure_depart }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Heure Arrivée</div>
                                                        <div class="text-bold">{{ item.heure_arrivee }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Lieu Depart</div>
                                                        <div class="text-bold">{{ item.lieu_depart }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Lieu Arrivee</div>
                                                        <div class="text-bold">{{ item.lieu_arrivee }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Km Jour</div>
                                                        <div class="text-bold">{{ item.km_jour }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Km Nuit</div>
                                                        <div class="text-bold">{{ item.km_nuit }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Forfait Tarif</div>
                                                        <div class="text-bold">{{ item.forfait_tarif }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Attente</div>
                                                        <div class="text-bold">{{ item.attente }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Nb Patients</div>
                                                        <div class="text-bold">{{ item.nb_patients }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Tpmr</div>
                                                        <div class="text-bold">{{ item.tpmr }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Péage</div>
                                                        <div class="text-bold">{{ item.payage }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Id Assure</div>
                                                        <div class="text-bold">{{ item.id_assure }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">User Id</div>
                                                        <div class="text-bold">{{ item.user_id }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Etat</div>
                                                        <div class="text-bold">{{ item.etat }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Facturation</div>
                                                        <div class="text-bold">{{ item.facturation }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Date Created</div>
                                                        <div class="text-bold">{{ item.date_created }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Date Updated</div>
                                                        <div class="text-bold">{{ item.date_updated }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Date</div>
                                                        <div class="text-bold">{{ item.date }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Pieces Jointes</div>
                                                        <div class="text-bold">{{ item.pieces_jointes }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Id Assure</div>
                                                        <div class="text-bold">{{ item.assure_id_assure }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Gender</div>
                                                        <div class="text-bold">{{ item.assure_gender }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Nom</div>
                                                        <div class="text-bold">{{ item.assure_nom }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Prenom</div>
                                                        <div class="text-bold">{{ item.assure_prenom }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Adresse</div>
                                                        <div class="text-bold">{{ item.assure_adresse }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Cp</div>
                                                        <div class="text-bold">{{ item.assure_cp }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Ville</div>
                                                        <div class="text-bold">{{ item.assure_ville }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Tel</div>
                                                        <div class="text-bold">{{ item.assure_tel }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Email</div>
                                                        <div class="text-bold">{{ item.assure_email }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Num Secu</div>
                                                        <div class="text-bold">{{ item.assure_num_secu }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Num Secu2</div>
                                                        <div class="text-bold">{{ item.assure_num_secu2 }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Num Amc</div>
                                                        <div class="text-bold">{{ item.assure_num_amc }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Caisse</div>
                                                        <div class="text-bold">{{ item.assure_caisse }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Mutuelle</div>
                                                        <div class="text-bold">{{ item.assure_mutuelle }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Date Naissance</div>
                                                        <div class="text-bold">{{ item.assure_date_naissance }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Nom Compagnon</div>
                                                        <div class="text-bold">{{ item.assure_nom_compagnon }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Tel Compagnon</div>
                                                        <div class="text-bold">{{ item.assure_tel_compagnon }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Adresse Compagnon</div>
                                                        <div class="text-bold">{{ item.assure_adresse_compagnon }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Remarques</div>
                                                        <div class="text-bold">{{ item.assure_remarques }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Id User</div>
                                                        <div class="text-bold">{{ item.assure_id_user }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Assure Pieces Jointes</div>
                                                        <div class="text-bold">{{ item.assure_pieces_jointes }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Id</div>
                                                        <div class="text-bold">{{ item.utilisateurs_id }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Login</div>
                                                        <div class="text-bold">{{ item.utilisateurs_login }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Email</div>
                                                        <div class="text-bold">{{ item.utilisateurs_email }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Nom</div>
                                                        <div class="text-bold">{{ item.utilisateurs_nom }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Prenom</div>
                                                        <div class="text-bold">{{ item.utilisateurs_prenom }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Date Naissance</div>
                                                        <div class="text-bold">{{ item.utilisateurs_date_naissance }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Entreprise</div>
                                                        <div class="text-bold">{{ item.utilisateurs_entreprise }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Infos</div>
                                                        <div class="text-bold">{{ item.utilisateurs_infos }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Telephone</div>
                                                        <div class="text-bold">{{ item.utilisateurs_telephone }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Adresse</div>
                                                        <div class="text-bold">{{ item.utilisateurs_adresse }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Date Cteck</div>
                                                        <div class="text-bold">{{ item.utilisateurs_date_cteck }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Date Vmedi</div>
                                                        <div class="text-bold">{{ item.utilisateurs_date_vmedi }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Date Fc</div>
                                                        <div class="text-bold">{{ item.utilisateurs_date_fc }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Date Rev Taxi M</div>
                                                        <div class="text-bold">{{ item.utilisateurs_date_rev_taxi_m }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs User Role Id</div>
                                                        <div class="text-bold">{{ item.utilisateurs_user_role_id }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Utilisateurs Password</div>
                                                        <div class="text-bold">{{ item.utilisateurs_password }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Remises</div>
                                                        <div class="text-bold">{{ item.remises }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Zone</div>
                                                        <div class="text-bold">{{ item.zone }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Signature</div>
                                                        <div class="text-bold">{{ item.signature }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Pec</div>
                                                        <div class="text-bold">{{ item.pec }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                        <div class="col-12">
                                            <q-card  class="q-pa-md nice-shadow-6">
                                                <div class="row q-col-gutter-x-md items-center">
                                                    <div class="col">
                                                        <div class="text-grey text-weight-medium mb-1">Minperc</div>
                                                        <div class="text-bold">{{ item.minperc }}</div>
                                                    </div>
                                                </div>
                                            </q-card>
                                        </div>
                                    </div>
                                    <div  class=" row q-col-gutter-xs justify-start q-ma-md">
                                        <template v-if="auth.canManage('', item.user_id)">
                                            <div><q-btn icon="edit" label="Edit"  outline  :rounded="false"  no-caps  unelevated   padding="xs" color="positive" title="Modifier"  @click="app.openPageDialog({ page:'courses/edit', url: `/courses/edit/${item.id_annexe}` , closeBtn: true })">
                                            </q-btn></div>
                                        </template>
                                    </div>
                                </div>
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
	import {  computed, ref, toRefs, onMounted } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app.js';
	import { useAuth } from 'src/composables/auth';
	import { ApiService } from 'src/services/api';
	import { useViewPage } from 'src/composables/viewpage.js';
	import { usePageStore } from 'src/stores/page';
	import vueSignature from "vue-signature";
import html2pdf from "vue-html2pdf";
	
	const props = defineProps({
		id: [String, Number],
		primaryKey: {
			type: String,
			default: 'id_annexe',
		},
		pageStoreKey: {
			type: String,
			default: 'COURSES-ANNEXE4',
		},
		pageName: {
			type: String,
			default: 'courses',
		},
		routeName: {
			type: String,
			default: 'coursesannexe4',
		},
		apiPath: {
			type: String,
			default: 'courses/annexe4',
		},
		autoLoad: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		titleBeforeDelete: {
			type: String,
			default: "Supprimer l'enregistrement",
		},
		msgBeforeDelete: {
			type: String,
			default: "Êtes-vous sûr de vouloir supprimer cet enregistrement?",
		},
		msgAfterDelete: {
			type: String,
			default: "Enregistrement supprimé avec succès",
		},
		exportFormats: {
			type: Array,
			default: () => ['pdf'],
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp(props);
	const auth = useAuth();
	
	const page = useViewPage({store, props}); // where page logics resides
	
	const {  currentRecord } = toRefs(store.state);
	const { loading, pageReady } = toRefs(page.state);
	const item = currentRecord;
	
	const  { load, deleteItem, exportPage,   } = page.methods;
	
	
	useMeta(() => {
		return {
			//set browser title
			title: "Vue Cours"
		}
	});
	
	onMounted(()=>{ 
	});
	const showHeader = ref(false);
const isSubPage = ref(false); 
const exportButton = ref(true);
const png = ref(null);
const signatureRef = ref(null);
const signaturePadOptions = { 
    width: 200, 
    height: 100,
    penColor: 'rgb(0, 0, 0)', // Couleur du stylo
};
const disabled = false;
const signature = ref(null);
const clearSignature = async (id) => {
    const png = signature.value.clear();
    console.log("this id", id);
    try {
        const response = await ApiService.post("courses/clearsignature/", { annexe_id: id });
        if (response.data.success) {
            app.flashMsg(response.data.msg);
            } else {
            app.flashMsg(response.data.msg, "negative");
        }
        } catch (error) {
        console.log(error);
    }
};
const saveSignature = async (id) => {
    console.log("Save Bouton");
    const png = signature.value.save();
    console.log("this png is:", png);
    console.log("this id", id);
    try {
        const response = await ApiService.post("courses/savesignature/", { annexe_id: id, png: png });
        if (response.data.success) {
            app.flashMsg(response.data.msg);
            } else {
            app.flashMsg(response.data.msg, "negative");
        }
        } catch (error) {
        console.log(error);
    }
};
const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('fr-FR', options);
    };
</script>
<style scoped>
</style>
