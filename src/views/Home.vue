<template>
  <div class="home">
    <H1 class="display-4">Mes projets</H1>
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
