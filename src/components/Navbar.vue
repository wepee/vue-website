<template>
    <v-app-bar
            color="primary"
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

                <span class="ml-2">
                Projet web
            </span>
            </div>



            <div class="ml-auto mr-auto">
                <v-btn
                        href="/home"
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
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
        </div>

    </v-app-bar>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
#navbar{
    max-height: min-content;
}
</style>