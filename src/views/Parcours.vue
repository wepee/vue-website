<template>
    <v-card>
        <v-tabs
                v-model="tab"
                background-color="blue accent-2"
                centered
                dark
                icons-and-text
        >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
                Etat Civil
                <v-icon>mdi-account</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
                Parcours
                <v-icon>mdi-hiking</v-icon>
            </v-tab>

            <v-tab href="#tab-3">
               Compétences
                <v-icon>mdi-brain</v-icon>
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'tab-' + i"
            >
                <v-card flat>
                    <div v-show="i===1"><Presentation/></div>
                    <div v-show="i===2"><Timeline/></div>
                    <div v-show="i===3"><Skills/></div>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
// @ is an alias to /src
import Timeline from '@/components/Timeline.vue'
import Presentation from '@/components/Presentation.vue'
import Skills from "../components/Skills";

export default {
        name: 'Parcours',
        components: {
            Skills, Timeline, Presentation,
        },
        data () {
            return {
                tab: null,
                pages : [Timeline,],
                text: '',
            }
        },
    }

</script>