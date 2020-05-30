<template>
    <v-app>
        <Navbar id="navbar"/>
        <div class="container">
            <slot />
        </div>
        <Footer/>
    </v-app>
</template>



<script>

    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer';

    export default {
        name: 'NoBanner',
        components :{Navbar, Footer}
    }
</script>

<style scoped>

</style>