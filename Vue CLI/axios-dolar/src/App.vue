<template>
 <!-- v-app para trabajar con vuetify -->
  <v-app>
    <!-- v-content ya no se usa, se usa v-main  -->
    <v-main>
<!-- para encerrar nuestas vistas => v-router  -->
      <v-container>


        <router-view/> 
      </v-container>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
