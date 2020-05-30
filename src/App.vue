<template>
  <v-app>
    <Banner/>
    <Navbar/>
    <v-content>
      <Portfolio/>



    </v-content>  <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';

export default {
  name: 'App',

  components: {
    HelloWorld, Banner, Navbar, Portfolio
  },

  data: () => ({
    //
  }),
};
</script>
