<template>
    <v-card height="300px">
        <v-footer
                absolute
                :padless=true
        >
            <v-card
                    flat
                    tile
                    width="100%"
                    class="blue lighten-1 text-center"
            >
                <v-card-text>
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            icon
                            :href="icon.link"
                    >
                        <v-icon size="24px">{{ icon.logo }}</v-icon>
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Adam Aleb</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-card>
</template>

<script>
    export default {
        name: 'Footer',
        data: () => ({
            icons: [
                {
                    logo : 'mdi-snapchat',
                    link : 'https://www.snapchat.com/add/adam_aleb',
                },
                {
                    logo : 'mdi-email',
                    link : 'mailto:aleb.adam@gmail.com',
                },
                {
                    logo : 'mdi-github',
                    link : 'https://github.com/wepee',
                },
                {
                    logo : 'mdi-linkedin',
                    link : 'https://www.linkedin.com/in/aleb-adam/',
                },
            ],
        }),

    }
</script>