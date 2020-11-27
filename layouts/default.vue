<template>
  <vue-app>
    <top-nav />
    <nuxt />
  </vue-app>
</template>

<script>
import TopNav from '../components/TopNav.vue'

export default {
  components: {
    'top-nav': TopNav,
  },
}
</script>
