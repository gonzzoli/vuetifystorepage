<template>
  <v-card>
    <v-row>
      <v-col cols="5" align-self="center">
        <v-img :src="product.image" class="ml-3" aspect-ratio="0.9" />
      </v-col>
      <v-col cols="7">
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-text>${{ product.price.toString() }}</v-card-text>
        <v-card-actions>
          <v-btn @click="actAddProduct(product.id)" color="success">
            <v-icon left>mdi-plus</v-icon>
            Add to cart
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
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
