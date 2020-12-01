<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Cart</h3>
        <CartHorizontalProduct
          v-for="product in $store.getters.inCartProducts"
          :key="product.id"
          :product="product"
        />
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Payment info</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartHorizontalProduct from '../components/CartHorizontalProduct.vue'

export default {
  components: {
    CartHorizontalProduct,
  },
}
</script>
