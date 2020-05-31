<template>
    <v-container class="pa-5 text-center pb-12">
            <v-row class="fill-height flex-row" justify="center"
                   >
        <v-hover
                v-slot:default="{ hover }"
                v-for="projet in projets"
                :key="projet.nom"
                transition ="fab-transition"

    >
            <v-card
                    class="mx-auto my-auto py-auto"
                    color="grey lighten-4"
                    max-width="450"
            >

                <v-img
                        v-if="projet.image"
                        :aspect-ratio="16/9"
                        :src="projet.image"
                >
                    <v-expand-transition>
                        <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                        >
                            {{ projet.techno }}
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text
                        class="pt-6"
                        style="position: relative;"
                >
                    <v-btn
                            v-if="projet.link!==''"
                            :href="projet.link"
                            absolute
                            color="blue"
                            class="white--text"
                            fab
                            large
                            right
                            top
                    >
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <div class="font-weight-light grey--text title mb-2">{{projet.date}}</div>
                    <h3 class="display-1 font-weight-light blue--text mb-2">{{projet.nom}}</h3>
                    <div class="font-weight-light title mb-2">
                        {{ projet.description }}
                    </div>
                </v-card-text>
            </v-card>
        </v-hover>
            </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'Portfolio',
        data: () => ({
            projets: [
                {
                    nom: 'Jeu de Poker sur plusieurs instances distantes',
                    date: '2020',
                    description: "Création d'un jeu de poker en C++. Les deux joueurs communiquent via un répertoire partagé sur O-drive. Les instances se synchronisent, les joueurs jouent à tour de rôle et le gagnant est annoncé" ,
                    techno: 'C++',
                    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    link: 'https://github.com/wepee/poker',
                },
                {
                    nom: 'Logiciel de maintenance de solutions complexes',
                    date: '2019',
                    description: 'Logiciel permettant d\'assurer plus facilement la maintenance de solutions SaaS WMS (warehouse Management System)\n' +
                        'Programmé en C++ avec le framework Qt',
                    techno: 'C++ | Qt',
                    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1462&q=80',
                    link:'',
                },
                {
                    nom: "Solution de reservation de voyage",
                    date: '2019',
                    description: 'Interface graphique permettant de plannifier un voyage.' +
                        ' L\'utilisateur est invité à remplir les informations concernant' +
                        ' le transport, l\'hebergement et les activités. On peut' +
                        ' également inviter des collaborateurs sur le voyage de manière' +
                        ' à pouvoir éditer à plusieurs les informations.' +
                        ' \n Logiciel C# communicant avec une base de données PosgreSQL',
                    techno: 'C# | posgresSQL',
                    image: 'https://images.unsplash.com/photo-1581094651181-35942459ef62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    link:'',
                },
                {
                    nom: 'Transmission d\'un signal audio par fibre optique',
                    date: '2019',
                    description: 'Conception et réalisation une chaîne de transmission audio constitué de deux éléments :\n' +
                        'Un émetteur : reçoit en entrée un signal audio et le met en forme afin de le transmettre en\n' +
                        'sortie à la fibre optique sous forme d’un signal lumineux.\n' +
                        'Un récepteur :  Reçoit par la fibre optique un signal lumineux à exploiter pour le mettre\n' +
                        'au format audio puis l’envoyer à un amplificateur de puissance audio.',
                    techno: 'PsoC',
                    image: 'https://images.unsplash.com/photo-1550041473-d296a3a8a18a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
                    link:'',
                },
                {
                    nom: 'Programme de Cryptographie',
                    date: '2018',
                    description: 'Le but du programme est de réaliser des operations sur de (très) grands nombres à des fins d\'application cryptographique. Utilisation de la méthode d\'exponentiation modulaire rapide (« square-and-multiply » dans le but d\'effectuer une exponentiation modulaire',
                    techno: 'C++',
                    image: 'https://images.unsplash.com/photo-1457904375453-3e1fc2fc76f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    link:'',
                },
                {
                    nom: 'Application web : Portfolio',
                    date: '2020',
                    description: 'Le site sur lequel vous naviguez actuellement est une application développée en Vue.JS.' +
                        'Cette application fait office de CV/Portfolio en ligne et contient mes projets, mon parcours et mes coordonées' +
                        'J\'ai utilisé la bibliothèque CSS Vuetify pour le design et d3 Network pour les graphiques.',
                    techno: 'Vue.JS',
                    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    link:'https://github.com/wepee/vue-website',
                },
            ],
        }),
    }
</script>

<style>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .8;
        position: absolute;
        width: 100%;
    }
</style>
