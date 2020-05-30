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
                >Home
                </v-btn>

            <v-btn
                        href="/mon-parcours"
                        text
                >Mon parcours
                </v-btn>
                <v-btn
                        href="/ressources"
                        text
                >Ressources
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