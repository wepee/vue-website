<template>
    <div class="Ressources">
        <h2 class="display-3 mt-8">Mes Fichiers</h2> <hr>
        <Files/>
        <h2 class="display-3 mt-8">ReadMe</h2> <hr>
        <readme/>
        <h2 class="display-3 mt-8">Mes ressources</h2> <hr>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Files from '@/components/Files.vue'
    import readme from '@/components/readme.vue'

    export default {
        name: 'Ressources',
        components: {
            HelloWorld, Files, readme,
        }
    }
</script>

