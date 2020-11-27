<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Awesome Shop</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items v-if="screenSize != 'xs'">
        <v-list-item v-for="item in items" :key="item">
          <v-btn :to="item.link" text align>
            <v-icon size="25px" left>mdi-{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-list-item>
      </v-toolbar-items>
      <span v-else>
        <v-btn @click.stop="drawer = !drawer">
          <v-icon v-if="drawer">mdi-wrap mdi-rotate-180</v-icon>
          <v-icon v-else>mdi-wrap-disabled mdi-rotate-180</v-icon>
        </v-btn>
      </span>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-icon style="margin-right: 25px">mdi-{{ item.icon }}</v-icon>
          <v-list-item-title style="font-size: 18px">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Store', link: '/store', icon: 'basket' },
        { title: 'Cart', link: '/cart', icon: 'cart' },
      ],
    }
  },
  computed: {
    screenSize() {
      return this.$vuetify.breakpoint.name
    },
  },
}
</script>
