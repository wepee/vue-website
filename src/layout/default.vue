<template>
    <v-app>
        <Banner/>
        <Navbar/>
    </v-app>
</template>



<script>

    import Banner from '@component/Banner'
    import Navbar from '@component/Navbar'

    export default {
        name: "banner-nav-footer",
        components :{Banner, Navbar,}
    }
</script>

<style scoped>

</style>