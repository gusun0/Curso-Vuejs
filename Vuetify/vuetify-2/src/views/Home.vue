<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>

      <v-card>
        <!-- cuando tenemos una tarjeta esta dividiod en 3 secciones -->
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>

        <v-card-title>
          <h2>Lorem, ipsum dolor.</h2>
        </v-card-title>

        <v-card-text>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="info" text>BOTON</v-btn>
        </v-card-actions>
        
      </v-card>
      </v-flex>

      <v-flex xs12 sm6>

      <v-card>
        <!-- cuando tenemos una tarjeta esta dividiod en 3 secciones -->
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
        
        <v-container>
          <v-layout>
            <v-flex>
              <span class="headline white--text">Lorem, ipsum dolor.</span>
            </v-flex>
          </v-layout>
        </v-container>
        
        </v-img>

        <v-card-title>
          <h2>Lorem, ipsum dolor.</h2>
        </v-card-title>

        <v-card-text>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </v-card-text>

        <v-card-actions>
          <v-btn color="info" text>BOTON</v-btn>
        </v-card-actions>
        
      </v-card>

      </v-flex>



    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
