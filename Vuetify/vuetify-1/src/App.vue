<template>
  <v-app>

    
    <!-- pide hacer un componente con esto   -->
    <v-app-bar app class="warning">
       <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hola</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">Ingreso</v-btn>
      <v-btn class="error">Salir</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">
            Juan Perez

          </p>
          </v-flex>
      </v-layout>
    </v-navigation-drawer>

      <v-main>
            <!-- router view hace que se visualicen todas las rutas -->
            <router-view>
            </router-view>
      </v-main>
    
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   
  },

  data() {
    return{
      drawer: true

    }
  }
    //
  
};
</script>
