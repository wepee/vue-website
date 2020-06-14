<template>
    <v-row>
    <v-app-bar
            color="blue accent-3"
            dark
    >
        <div class="row my-auto align-content-center justify-space-between"  id="navbar">

            <div class="d-flex align-center mr-12">
                <v-img
                        alt="Logo telecom"
                        class="shrink m-2"
                        contain
                        src="https://josephchataignon.github.io/Ressources/Images/logoTSE.png"
                        transition="scale-transition"
                        width="40"
                />
                <span class="ml-2"  style="color: white">
                    Projet web
                </span>
            </div>



            <v-toolbar-items class="hidden-sm-and-down ml-auto mr-auto">
                <v-btn
                        v-for="item in items"
                        :key="item.id"
                        text
                >
                    <router-link :to="item.link" style="color:white;text-decoration-line: none;">{{item.title}}</router-link>
                </v-btn>



            </v-toolbar-items>

            <v-btn
                href="https://www.linkedin.com/in/aleb-adam"
                target="_blank"
                class="hidden-sm-and-down"
                text
            >
                <span class="mr-2">
                    En savoir plus
                </span>
                <v-icon style="color : white">mdi-open-in-new</v-icon>
            </v-btn>

            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
    </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list
                    nav
                    dense
            >
                <v-list-item-group
                        v-model="group"
                        v-for="item in items"
                        :key="item.id"
                >
                    <router-link :to="item.link" tag="btn">
                        <v-list-item>
                            <v-list-item-title>
                                {{item.title}}
                            </v-list-item-title>
                        </v-list-item>
                    </router-link>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-row>
</template>

<script>
    export default {
        name: "Navbar",
        data () {
            return {
                drawer: false,
                group: null,
                items : [
                    {
                        id: 1,
                        title: 'Home',
                        link: 'home',

                    },
                    {
                        id:2,
                        title:'Parcours',
                        link:'mon-parcours',

                    },
                    {
                        id:3,
                        title:'Ressources',
                        link:'ressources',

                    },
                ]
            }
        },
        watch: {
            group () {
                this.drawer = false
            },
        }

    }
</script>

<style scoped>
nav{
    max-height: min-content;
    color : #1976d2;
}

span.mr-2{
        color: white;
    }
</style>