<template>
  <v-container class="pa-0 ma-0" style="max-width: 1500px">
    <header-component />
    <popular-products-component />
    <footer-component />
  </v-container>
</template>

<script>
import Header from '../components/Header.vue'
import PopularProducts from '../components/PopularProducts.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'header-component': Header,
    'popular-products-component': PopularProducts,
    'footer-component': Footer,
  },
}
</script>
