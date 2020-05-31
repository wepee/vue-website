<template>
    <div>
        <a class="">Voici mes compétences</a>
        <div v-for="skill in skills" :key="skill.name">
            <v-card-text>{{skill.nom}}</v-card-text>
            <v-progress-linear
                    :color="skill.color"
                    height="20"
                    style="width:50%;"
                    :value="skill.value"
                    reactive
            ><strong>{{skill.value}}%</strong></v-progress-linear>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Files"
    }
</script>

<style scoped>

</style>