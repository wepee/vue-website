<template>
  <v-container>
    <v-row class="text-center pt-10">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Ressources
        </h1>
        <p class="subheading font-weight-regular">
          Les ressources qui suivent m'ont aidé dans la réalisation de ce site
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Documentation
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in documentation"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Tutoriels & Exemples
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in tutoriels"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Framework
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      documentation: [
        {
          text: 'Vuetify',
          href: 'https://vuetifyjs.com/fr-FR/introduction/guide/',
        },
        {
          text: 'VueJS',
          href: 'https://vuejs.org/v2/guide/',
        },
        {
          text: 'D3 network',
          href: 'https://github.com/emiliorizzo/vue-d3-network',
        },
      ],
      tutoriels: [
        {
          text: 'Grafikart',
          href: 'https://www.grafikart.fr',
        },
        {
          text: 'Utilisation de vidéos',
          href: 'http://monbootstrap.fr/integrer-de-la-video-en-arriere-plan/',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Layout et router',
          href: 'https://medium.com/thewarmupio/bref-voici-comment-cr%C3%A9er-un-syst%C3%A8me-de-layout-avec-vue-et-vue-router-44673f132e74',
        },
      ],
      ecosystem: [
        {
          text: 'Vuetify',
          href: 'https://vuetifyjs.com/',
        },
        {
          text: 'D3 Network',
          href: 'https://www.d3-graph-gallery.com/index.html',
        },
        {
          text: 'VueJS',
          href: 'https://fr.vuejs.org/',
        },
      ],
    }),
  }
</script>
