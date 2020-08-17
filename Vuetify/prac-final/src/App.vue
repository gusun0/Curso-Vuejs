<template>
  <v-app>
  
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
           <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="perfil">
        </v-avatar>
      </v-flex>
      <v-flex>
           <p class="white--text mt-3 headline">Juan Perez</p>
      </v-flex>
    </v-layout>

    <v-layout column>
      <v-flex mx-3>
        <v-btn color="success my-2" block :to="{name:'Home'}">Home</v-btn>
        <v-btn color="warning" block :to="{name:'tareas-crud'}">Lista de tareas</v-btn>
      </v-flex>
    </v-layout>

  </v-navigation-drawer>

    <v-main>
      <!-- <HelloWorld/> -->
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data(){
    return{
      drawer: true
    }
  }

};
</script>
