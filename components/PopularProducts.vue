<template>
  <v-container class="mb-14">
    <h2 class="ml-3">Popular Products</h2>
    <v-btn to="/store" text class="ml-6 ma-2" outlined>View all</v-btn>
    <v-container>
      <v-row>
        <v-col
          v-for="product in $vuetify.breakpoint.name == 'sm'
            ? products.slice(0, 2)
            : products.slice(0, 3)"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <VerticalProduct
            v-if="$vuetify.breakpoint.name != 'xs'"
            :product="product"
          />
          <HorizontalProduct v-else :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import VerticalProduct from './VerticalProduct.vue'
import HorizontalProduct from './HorizontalProduct.vue'

export default {
  components: {
    VerticalProduct,
    HorizontalProduct,
  },
  computed: {
    ...mapGetters(['products']),
  },
}
</script>
