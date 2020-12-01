<template>
  <v-container>
    <v-row v-if="$vuetify.breakpoint.name != 'xs'">
      <v-col cols="3">
        <filter-products />
      </v-col>
      <v-col cols="7">
        <v-row>
          <v-col
            v-for="product in $store.getters.filteredProducts"
            :key="product.id"
            sm="6"
            md="4"
          >
            <vertical-product :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else style="flex-direction: column">
      <filter-products />
      <v-col
        v-for="product in $store.getters.filteredProducts"
        :key="product.id"
        cols="12"
      >
        <horizontal-product :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VerticalProduct from '../components/VerticalProduct.vue'
import HorizontalProduct from '../components/HorizontalProduct.vue'
import FilterProducts from '../components/FilterProducts.vue'

export default {
  components: {
    VerticalProduct,
    HorizontalProduct,
    FilterProducts,
  },
}
</script>
