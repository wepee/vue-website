<template>
    <v-app>
        <Banner/>
        <Navbar/>
        <div class="container">
            <slot />
        </div>
        <Footer/>
    </v-app>
</template>



<script>

    import Banner from '@/components/Banner';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';

    export default {
        name: "Default",
        components :{Banner, Navbar, Footer,},
    }
</script>

<style scoped>

</style>