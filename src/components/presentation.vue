<template>
    <div>
            <v-card
                    max-width="75%"
                    class="mx-auto"
            >
                <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                        height="300px"
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
        <v-container fluid>
            <v-row justify="center">
                <v-subheader>Today</v-subheader>

                <v-expansion-panels popout>
                    <v-expansion-panel
                            v-for="(message, i) in messages"
                            :key="i"
                            hide-actions
                    >
                        <v-expansion-panel-header>
                            <v-row
                                    align="center"
                                    class="spacer"
                                    no-gutters
                            >
                                <v-col
                                        cols="4"
                                        sm="2"
                                        md="1"
                                >
                                    <v-avatar
                                            size="36px"
                                    >
                                        <img
                                                v-if="message.avatar"
                                                alt="Avatar"
                                                :src="message.avatar"
                                        >
                                        <v-icon
                                                v-else
                                                :color="message.color"
                                                v-text="message.icon"
                                        ></v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col
                                        class="hidden-xs-only"
                                        sm="5"
                                        md="3"
                                >
                                    <strong v-html="message.name"></strong>
                                    <span
                                            v-if="message.total"
                                            class="grey--text"
                                    >
                  &nbsp;({{ message.total }})
                </span>
                                </v-col>

                                <v-col
                                        class="text-no-wrap"
                                        cols="5"
                                        sm="3"
                                >
                                    <v-chip
                                            v-if="message.new"
                                            :color="`${message.color} lighten-4`"
                                            class="ml-0 mr-2 black--text"
                                            label
                                            small
                                    >
                                        {{ message.new }} new
                                    </v-chip>
                                    <strong v-html="message.title"></strong>
                                </v-col>

                                <v-col
                                        v-if="message.excerpt"
                                        class="grey--text text-truncate hidden-sm-and-down"
                                >
                                    &mdash;
                                    {{ message.excerpt }}
                                </v-col>
                            </v-row>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                            <v-divider></v-divider>
                            <v-card-text v-text="lorem"></v-card-text>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Presentation",
        data: () => ({
            messages: [
                    {
                        avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQGP7S6xMgHEoQ/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=JdlyUrshgqXXOdU_B9dpWG0fh-vqNCMYfaMRRv9YTfs',
                        name: 'John Leider',
                        title: 'Welcome to Vuetify.js!',
                        excerpt: 'Thank you for joining our community...',
                    },
                    {
                        color: 'red',
                        icon: 'people',
                        name: 'Social',
                        new: 1,
                        total: 3,
                        title: 'Twitter',
                    },
                    {
                        color: 'teal',
                        icon: 'local_offer',
                        name: 'Promos',
                        new: 2,
                        total: 4,
                        title: 'Shop your way',
                        exceprt: 'New deals available, Join Today',
                    },
                ],
                lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
            }),
    }
</script>

<style scoped>

</style>