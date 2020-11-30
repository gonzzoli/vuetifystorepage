<template>
  <v-app>
    <top-nav />
    <nuxt />
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :timeout="4000"
      :top="true"
      :right="true"
      :color="$store.state.snackbar.variant"
      multi-line
    >
      {{ $store.state.snackbar.message }}
      <v-btn text outlined @click.native="closeSnackbar()">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import TopNav from '../components/TopNav.vue'

export default {
  components: {
    'top-nav': TopNav,
  },
  created() {
    this.$vuetify.theme.dark = false
  },
  methods: {
    ...mapMutations(['closeSnackbar']),
  },
}
</script>
