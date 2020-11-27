<template>
  <div class="container">
    <header-component />
    <popular-products-component />
    <footer-component />
  </div>
</template>

<script>
const Header = require('../components/Header.vue')
const PopularProducts = require('../components/PopularProducts.vue')
const Footer = require('../components/Footer.vue')

export default {
  components: {
    'header-component': Header,
    'popular-products-component': PopularProducts,
    'footer-component': Footer,
  },
}
</script>
