<template>
  <div class="home">
    <div class="d-flex-col text-center py-10">
      <H1 class="display-2">Mes projets</H1>
      <p class="subtitle-2">Une selection des projets que j'ai pu réaliser le long de mon parcours</p>
    </div>
    <Portfolio/>
    <Form/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/components/Portfolio.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'Home',
  components: {
    Portfolio, Form,
  }
}
</script>
