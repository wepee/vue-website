<template>
    <div>
        <div class="row align-content-center">
            <v-label>Parcours Scolaire</v-label>
            <v-switch v-model="showPro" :color="showPro ? 'red' : 'blue'"></v-switch>
            <v-label>Parcours professionnel</v-label>
        </div>

        <v-timeline v-show="!showPro" :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
                    v-for="etude in etudes"
                    :key="etude.titre"
            >
                <span slot="opposite">{{etude.annee}}</span>
                <v-card class="elevation-2">
                    <v-card-title class="headline">{{etude.etablissement}} | {{etude.titre}}</v-card-title>
                    <v-card-text>
                        {{etude.descriptif}}
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
        <v-timeline v-show="showPro" :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
                    v-for="pro in pros"
                    :key="pro.titre"
                    color="red"
            >
                <span slot="opposite">{{pro.annee}}</span>
                <v-card class="elevation-2">
                    <v-card-title class="headline">{{pro.titre}} | {{pro.entreprise}}</v-card-title>
                    <v-card-text>
                        {{pro.descriptif}}
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
    export default {
        name: "Timeline",
        data: () => ({
            showPro: false,
            etudes: [
                {
                    etablissement :'Telecom Saint-etienne',
                    titre :'Cycle ingénieur',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },
                {
                    etablissement :'Telecom Saint-etienne',
                    titre :'Cycle ingénieur',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },
                {
                    etablissement :'Telecom Saint-etienne',
                    titre :'Cycle ingénieur',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },
                {
                    etablissement :'Telecom Saint-etienne',
                    titre :'Cycle ingénieur',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },

            ],
            pros: [
                {
                titre :'Chargé d\'affaire',
                entreprise :'Inspire',
                descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                annee : '2019 à Maintenant',
                link :'',
                },
                {
                    titre :'Conseiller de vente',
                    entreprise :'AS Saint-Etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },
                {
                    titre :'Agent polyvalent',
                    entreprise :'Telecom Saint-etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },
                {
                    titre :'Professeur Particulier',
                    entreprise :'Telecom Saint-etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },
                {
                    titre :'Agent de production',
                    entreprise :'Noble-chocolat',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                },

            ],
        }),
    }
</script>

<style scoped>

</style>