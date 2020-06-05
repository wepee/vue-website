<template>
    <v-app-bar
            color="blue accent-3"
            dense
            dark
    >

        <div class="row my-auto" id="navbar">
            <div class="d-flex align-center mr-12">
                <v-img
                        alt="Logo telecom"
                        class="shrink mr-2"
                        contain
                        src="https://josephchataignon.github.io/Ressources/Images/logoTSE.png"
                        transition="scale-transition"
                        width="40"
                />

                <span class="ml-2"  style="color: white">
                Projet web
            </span>
            </div>



            <div class="ml-auto mr-auto">
                <v-btn
                        href="/"
                        text
                ><router-link to='/home' style="color:white;text-decoration-line: none;">Home</router-link>
                </v-btn>

            <v-btn
                        text
                ><router-link to='/mon-parcours' style="color:white;text-decoration-line: none;">mon parcours</router-link>
                </v-btn>
                <v-btn
                        href="/ressources"
                        text
                ><router-link to='/ressources' style="color:white;text-decoration-line: none;">Ressources</router-link>
                </v-btn>
            </div>

            <v-btn
                href="https://www.linkedin.com/in/aleb-adam"
                target="_blank"
                text
        >

            <span class="mr-2">En savoir plus</span>
            <v-icon style="color : white">mdi-open-in-new</v-icon>
        </v-btn>
        </div>

        <v-menu
                left
                bottom
        >
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"
                >
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

    </v-app-bar>
</template>

<script>
    export default {
        name: "Navbar"
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