<template>
  <v-card>
    <v-img :src="product.image" class="pa-5" aspect-ratio="2" />
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>${{ product.price.toString() }}</v-card-text>
    <v-card-actions>
      <v-btn color="success" @click="actAddProduct(product)">
        <v-icon left>mdi-plus</v-icon>
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          id: 1001,
          title: 'Product One',
          price: 142,
          image: '/coffee.jpg',
        }
      },
    },
  },
  methods: {
    ...mapActions(['actAddProduct']),
  },
}
</script>
