<template>
  <div>
    <v-row>
      <v-col v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="n" cols="3">
        <v-card>
          <v-card-title>Holaa</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
