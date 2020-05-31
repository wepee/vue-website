<template>
    <div>
            <v-card
                    max-width="75%"
                    class="mx-auto"
            >
                <v-img
                        src="../assets/banniere-ny.png"
                        dark
                >
                    <v-row class="fill-height">

                        <v-card-title class="white--text pl-12 pt-12">
                            <div class="display-1 pl-15 pt-12">Adam Aleb</div>
                        </v-card-title>
                    </v-row>
                </v-img>

                <v-list two-line>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-map</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Région Lyonnaise</v-list-item-title>
                            <v-list-item-subtitle>Localité</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-id-card</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Français</v-list-item-title>
                            <v-list-item-subtitle>Nationnalité</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-phone</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title> +33 (0)6 18 52 21</v-list-item-title>
                            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-icon>
                            <v-icon>mdi-message-text</v-icon>
                        </v-list-item-icon>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-email</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>aleb.adam@gmail.com</v-list-item-title>
                            <v-list-item-subtitle>Personnel</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-action></v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>a.aleb@inspire-telecom.com</v-list-item-title>
                            <v-list-item-subtitle>Professionel</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-map-marker</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>14 rue Georges Teissier</v-list-item-title>
                            <v-list-item-subtitle>Saint-Etienne, 42000</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
    </div>
</template>

<script>
    export default {
        name: "Presentation",

    }
</script>

<style scoped>

</style>