<template>
  <div class="Parcours">
    <img alt="Vue logo" src="../assets/logo.png">
    <Timeline/>
  </div>
</template>

<script>
// @ is an alias to /src
import Timeline from '@/components/Timeline'
export default {
  name: 'Parcours',
  components: {
    Timeline,
  }
}
</script>
