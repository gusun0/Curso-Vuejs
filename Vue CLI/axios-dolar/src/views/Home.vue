<template>
<div>
  <!-- v layout => row  -->
  <!-- :wrap para que se respeten las 12 columnas  -->
  <v-layout :wrap="true"> 
    <!-- vflex => columna  -->
    <v-flex xs12>
        <v-card>
           <v-date-picker 
           v-model="picker"
            full-width
            locale="es-mx"   
           >
           </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <!-- display 1 es para el tamaño de la letra -->
          <v-card-text class="display-1 text-center"> 
          650 - {{picker}}
          </v-card-text>
        </v-card>
    </v-flex>



  </v-layout>


</div>

</template>

<script>
// @ is an alias to /src


export default {
  //cuando trabajamos con v-model tenemos que poner la data
  data(){
    return{
      picker: ''
    }
  }
  
}
</script>
