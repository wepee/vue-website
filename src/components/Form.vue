<template>
 <v-container class="d-flex justify-center pt-5">
    <v-card min-width="50%">
            <div class="container">
                <p class="display-2 pb-5">Contactez-moi</p>
                <form>
                    <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="10"
                            label="Nom"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-textarea
                            v-model="message"
                            name="input-7-1"
                            filled
                            label="Votre message"
                            auto-grow
                            value=""
                    ></v-textarea>
                    <v-checkbox
                            v-model="checkbox"
                            :error-messages="checkboxErrors"
                            label="Êtes-vous sûr d'envoyer ce message ?"
                            required
                            @change="$v.checkbox.$touch()"
                            @blur="$v.checkbox.$touch()"
                    ></v-checkbox>
                    <div class ="container pt-5">
                        <v-btn class="mr-4" @click="clear">effacer</v-btn>
                        <v-btn class="mr-4" @click="submit">envoyer</v-btn>
                        <v-snackbar
                                v-model="snackbar"
                        >
                            {{ text }}

                                <v-btn
                                        text
                                        color="white"
                                        v-bind="attrs"
                                        @click="snackbar = false"
                                >
                                    Fermer
                                </v-btn>
                        </v-snackbar>
                    </div>
                </form>
            </div>
    </v-card>

 </v-container>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            message: { required },
            checkbox: {
                checked (val) {
                    return val
                },
            },
        },

        data: () => ({
            snackbar: false,
            text: 'Le message n\'a pas été envoyé',
            name: '',
            email: '',
            message: null,
            checkbox: false,
        }),

        computed: {
            checkboxErrors () {
                const errors = []
                if (!this.$v.checkbox.$dirty) return errors
                !this.$v.checkbox.checked && errors.push('Vous devez accepter les conditions pour continuer')
                return errors
            },
            selectErrors () {
                const errors = []
                if (!this.$v.select.$dirty) return errors
                !this.$v.select.required && errors.push('Ce champ est obligatoire')
                return errors
            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Votre nom ne peut dépasser 10 caractères')
                !this.$v.name.required && errors.push('Le champ \'Nom\' est obligatoire')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Votre Adresse e-mail n\'est pas valide')
                !this.$v.email.required && errors.push('Le champ \'Adresse e-mail\' est obligatoire')
                return errors
            },
        },

        methods: {
            submit () {
                this.$v.$touch();
                this.snackbar = true;
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.message = null
                this.checkbox = false
            },
        },
    }
</script>

<style scoped>

</style>