<template>
    <div class="container">
        <q-card class="q-my-lg text-center nice-shadow-1">
            <q-card-section>
                <q-icon size="60px" color="warning" name="account_box"></q-icon> 
                <div class="text-h4 text-bold text-warning q-my-md">
                     Votre compte est en attente d'examen
                </div>
                <div class="text-grey">
                    Veuillez contacter l'administrateur système pour plus d'informations
                </div>
                <q-separator class="q-my-md" />
                <q-btn to="/" no-caps unelevated icon="home" color="primary">Continuer</q-btn>
            </q-card-section>
        </q-card>
    </div>
</template>
