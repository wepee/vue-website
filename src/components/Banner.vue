<template>
    <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col class="text-center" cols="12">
                    <v-avatar size="100">
                        <img
                                src="https://media-exp1.licdn.com/dms/image/C5603AQGP7S6xMgHEoQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=m7HNbD8KaBhmlS6BPWSgt2Zt2OOBEPV9rmqL7Yr6Pjs"
                                alt="adam"
                        >
                    </v-avatar>
                    <h1 class="display-1 font-weight-thin mb-4">Adam Aleb</h1>
                    <h4 class="subheading">Etudiant en informatique et réseaux</h4>
                </v-col>
            </v-row>
    </v-parallax>
</template>


<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>

</style>