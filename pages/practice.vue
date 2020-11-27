<template>
  <v-container pa-0 ma-0>
    <v-row>
      <v-col v-for="content in contents" :key="content" cols="6">
        <v-card>
          <v-card-title class="yellow--text">Card</v-card-title>
          <v-card-text>{{ content }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        'This is first card',
        'This is second card',
        'This is third card',
        'This is fourth card',
      ],
    }
  },
  head() {
    return {
      title: 'Practicing Vue',
    }
  },
}
</script>
