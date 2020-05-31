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
                        <v-btn class="mr-4" @click="clear">clear</v-btn>
                        <v-btn class="mr-4" @click="submit">submit</v-btn>
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
                !this.$v.select.required && errors.push('Item is required')
                return errors
            },
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.name.required && errors.push('Name is required.')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },
        },

        methods: {
            submit () {
                this.$v.$touch()
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