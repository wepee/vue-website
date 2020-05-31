<template>
    <div class="Ressources">
        <Files/>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Files from '@/components/Files.vue'

    export default {
        name: 'Ressources',
        components: {
            HelloWorld, Files
        }
    }
</script>