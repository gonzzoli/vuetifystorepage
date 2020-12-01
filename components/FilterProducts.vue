<template>
  <v-container>
    <v-sheet v-if="$vuetify.breakpoint.name != 'xs'">
      <h3>Filter Products</h3>
      <v-radio-group v-model="priceLimit" column>
        <v-radio class="my-3" label="All" value="999999"></v-radio>
        <v-radio class="my-3" label="Up to $100" value="100"></v-radio>
        <v-radio class="my-3" label="Up to $200" value="200"></v-radio>
        <v-radio class="my-3" label="Up to $500" value="500"></v-radio>
        <v-radio class="my-3" label="Up to $1000" value="1000"></v-radio>
      </v-radio-group>
    </v-sheet>
    <v-expansion-panels v-else>
      <v-expansion-panel expand focusable>
        <v-expansion-panel-header>
          <h3>Filter Products</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="priceLimit" row>
            <v-radio class="my-2" label="All" value="999999"></v-radio>
            <v-radio class="my-2" label="Up to $100" value="100"></v-radio>
            <v-radio class="my-2" label="Up to $200" value="200"></v-radio>
            <v-radio class="my-2" label="Up to $500" value="500"></v-radio>
            <v-radio class="my-2" label="Up to $1000" value="1000"></v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      priceLimit: 99999,
    }
  },
  updated() {
    this.$store.dispatch('actFilterProducts', this.priceLimit)
  },
}
</script>
