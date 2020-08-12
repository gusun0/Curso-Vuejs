<template>
 <!-- v-app para trabajar con vuetify -->
  <v-app>
    <!-- v-content ya no se usa, se usa v-main  -->
    <v-main>
<!-- para encerrar nuestas vistas => v-router  -->
      <v-container>
        <router-view/> 
        
        <v-dialog
      v-model="loading.estado"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
         {{loading.titulo}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

      </v-container>

    </v-main>
  </v-app>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'App',

  data: () => ({
    //
  }),
// el mapState es una prpíedad comútada
  computed: {
    ...mapState(['loading'])
  }
};
</script>
