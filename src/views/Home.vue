<template>
  <div class="home">
    <div class="d-flex justify-center align-center py-8">
      <H1 class="display-4">Mes projets</H1>
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
