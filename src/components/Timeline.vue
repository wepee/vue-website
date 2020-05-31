<template>
    <div class="pa-12">
        <div class="row align-content-center">
            <v-label>Parcours Scolaire</v-label>
            <v-switch v-model="showPro" :color="showPro ? 'red' : 'blue'"></v-switch>
            <v-label>Parcours professionnel</v-label>
        </div>

        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
                    v-for="exp in exps"
                    :key="exp.titre"
                    v-show="showPro || !exp.isPro"
                    transition="fade-transition"
                    :color="exp.isPro ? 'red' : 'blue'"

            >
                <span slot="opposite">{{exp.annee}}</span>
                <v-card class="elevation-4 ">
                    <v-card-title class="headline">{{exp.etablissement}} | {{exp.titre}}</v-card-title>
                    <v-card-text>
                        {{exp.descriptif}}
                    </v-card-text>
                    <ul v-if="exp.taches != ''">
                            <li v-for="tache in exp.taches" :key="tache">{{ tache }} </li>
                    </ul>
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
            exps: [
                {
                    titre :'Chargé d\'affaire',
                    etablissement :'Inspire',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :['Prospection et qualification du prospect','Suivi d\'étude, de l\'analyse du besoin à la fidélisation du client\n','Product Owner : gestion de projet agile'],
                    annee : '2019 à Maintenant',
                    link :'',
                    isPro : true,

                },{
                    titre :'Cycle ingénieur',
                    etablissement :'Telecom Saint-etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :[''],
                    annee : '2019 à Maintenant',
                    link :'',
                    isPro : false,
                },
                {
                    titre :'Diplôme CiTiSE',
                    etablissement :'IUT Saint-Etienne & Telecom Saint-etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :[''],
                    annee : '2017 à 2019',
                    link :'',
                    isPro : false,

                },
                {
                    titre :'Classe préparatoire',
                    etablissement :'Telecom Saint-etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :[''],
                    annee : '2019 à Maintenant',
                    link :'',
                    isPro : false,

                },

                {
                    titre :'Conseiller de vente',
                    etablissement :'AS Saint-Etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :[''],
                    annee : '2019 à Maintenant',
                    link :'',
                    isPro : true,
                },
                {
                    titre :'Agent polyvalent',
                    etablissement :'Telecom Saint-etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :[''],
                    annee : '2019 à Maintenant',
                    link :'',
                    isPro : true,
                },
                {
                    titre :'Professeur Particulier',
                    etablissement :'Telecom Saint-etienne',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :[''],
                    annee : '2019 à Maintenant',
                    link :'',
                    isPro : true,
                },
                {
                    titre :'Agent de production',
                    etablissement :'Noble-chocolat',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :[''],
                    annee : '2019 à Maintenant',
                    link :'',
                    isPro : true,
                },

            ],
        }),
    }
</script>

<style scoped>

</style>