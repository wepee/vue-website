<template>
    <v-stepper v-model="e6" vertical class="container align-content-center mx-8">
        <v-stepper-step :complete="e6 > 1" step="1">
            Introduction
            <small>Pourquoi Vue.js ?</small>
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-card color="blue lighten-5" class="mb-12 p-4">
                <span>{{text[e6]}}</span>
            </v-card>
            <v-btn color="primary" @click="e6 = 2">Continuer</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">Présentation globale</v-stepper-step>

        <v-stepper-content step="2">
            <v-card color="blue lighten-5" class="mb-12 p-4">
                <span>{{text[e6]}}</span>
            </v-card>
            <v-btn color="primary" @click="e6 = 3">Continuer</v-btn>
            <v-btn text @click="e6 = 1">Retour</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">Quelques remarques</v-stepper-step>

        <v-stepper-content step="3">
            <v-card color="blue lighten-5" class="mb-12 p-4">
                <span>{{text[e6]}}</span>
            </v-card>
            <v-btn color="primary" @click="e6 = 1">Recommencer</v-btn>
            <v-btn text @click="e6 = 2">Retour</v-btn>
        </v-stepper-content>
    </v-stepper>

</template>

<script>
    export default {
        name: "readme",

        data () {
            return {
                e6: 1,
                text : ['',
                    'Ce site a été fait en html css et javascript avec Vue.JS , un framework javascript. ' +
                    'J\'ai choisi de le developper de cette manière avec l\'accord de M.Chevalier car le ' +
                    'Html et le css me sont déjà familiers. Ce cours étant un cours de découverte du web, ' +
                    'j\'ai pu decouvir une nouvelle facette de ce domaine.\nJ\'ai rédigé cette petite section ' +
                    'pour ne pas être pénalisé vis à vis des libertés que j\'ai pu prendre.\n' +
                    'Si toutefois vous constatez des manquements au cahier des charges non justifiés dans ' +
                    'cette section et qui pourraient me couter des points, n\'hesitez pas à m\'en faire part ' +
                    'au coordonnées indiquées sur ce site.',

                    'L\'outil de build utilisé pour configurer le projet est l\'invité de commande VueCLi. J’ai utilisé la bibliothèque CSS Vuetify, configuré les routes avec Vue router, créé les diagrammes type « réseau » avec D3 network.\n' +
                    'Le code source se trouve sur gitHub (Vous trouverez le lien du projet dans home>Mes projets>Application Web : Portfolio).\n' +
                    'Vous trouverez dans les différents répertoires : \n\n' +
                    'Public : index.html – C’est ici que le code Html sera généré. Vue.js de faire des SPA (single page application), en réalité il n’y a donc qu’une page html. Les chemins de l’url n’existent pas il s’agit simplement s’un système de routage qui permet de changer dynamiquement le code de l’unique page index.html.\n\n' +
                    'Assets : contient les ressources telles que les image ou les vidéos.\n\n' +
                    'Components : un component est un fichier .vue qui contient une partie template (=Html), une partie style (=CSS) et une partie script (=Javascript). C’est un petit composant qui peut être généré dans une « Vue »\n\n' +
                    'Views : Contient les « vue ». Une vue est un ensemble de composant. C’est une « Vue » qu’on appelle dans index.html en fonction de la route utilisée.\n\n' +
                    'Layout : Contient les Layouts. Les Layouts permettent de créer un « socle » dans lequel s’inscrit ta vue. C’est utile quand tu sais que certains components tels que le footer et la navbar apparaissent dans la plupart des vues. On appellera alors la vue au sein d’un Layout qui continent la navbar et le footer.\n\n' +
                    'Router : index.js – on définit ici nos routes, c’est-à-dire quel vue appeler dans quel layout selon l’url.\n',

                    'Le site est hébergé sur GitHub et tourne sur un serveur netlify. \n' +
                    '\n' +
                    'Correction via WW3 CSS validation Service : \n' +
                    'Il y a des centaines d’erreurs mais elles sont dues à Bootstrap l’une des bibliothèque CSS que j’utilise. Je n’y peux pas grand-chose, merci d’en tenir rigueur lors de la correction\n' +
                    '\n' +
                    'Correction des différentes pages :\n' +
                    'En réalité il n’y a qu’une page index.html. \n' +
                    'Vous ne pouvez donc pas actualiser, ou aller à la page précédente. Vue.js est utilisé pour les applications web donc sur un seul url, mais j’ai mis en place un système de routage pour me conformer en partie au cahier des charges et « donner l’illusion » d’un site multipage.\n',
                ],
            }

        },
    }
</script>


<style scoped>

    span{
        white-space: pre-wrap;
        word-wrap: break-word;
    }

</style>