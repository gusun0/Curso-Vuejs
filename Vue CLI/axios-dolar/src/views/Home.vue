<template>
<div>
  <!-- v layout => row  -->
  <!-- :wrap para que se respeten las 12 columnas  -->
  <v-layout :wrap="true"> 
    <!-- vflex => columna  -->
    <v-flex xs12>
        <v-card>
           <v-date-picker 
           v-model="fecha"
            full-width
            locale="es-mx"   
            :min="minimo"
            :max="maximo"
            @change="getDolar(fecha)"
           >
           <!-- se usa el evento change para mandar picker a la funcion getDolar -->
           </v-date-picker>
        </v-card>

        <v-card color="error" dark>
          <!-- display 1 es para el tamaño de la letra -->
          <v-card-text class="display-1 text-center"> 
          {{valor}} - {{fecha}}

          
          </v-card-text>
        </v-card>
    </v-flex>



  </v-layout>


</div>

</template>

<script>
// @ is an alias to /src
// donde coloquemos nuestra vista se importa axios

import axi from "axios"; 
import { mapMutations } from "vuex";



export default {

  //cuando trabajamos con v-model tenemos que poner la data
  data(){
    return{
      // para que comience con la fecha al dia actual
      fecha:  new Date().toISOString().substr(0,10),
      // se pone entre comillas por que en la doc es de tipo string 
      minimo: '1984',
      maximo: new Date().toISOString().substr(0,10),
      valor: null
      
      }
  },

  methods:{

    ...mapMutations(['mostrarLoading','ocultarLoading']),

    // es una funcion asincrona   
    async getDolar(dia){
    // console.log(dia); 
    // split => funcion que nos separa un string y lo convierte en array 
    let arrayFecha = dia.split(['-'])
    // console.log(arrayFecha);
    let ddmmyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]
    // console.log(ddmmyy);

// cada que usamos await es recomendando usar un try catch 
    try {
      
      this.mostrarLoading({titulo: 'Accediendo a informacion'})


      let datos = await axi.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
      // console.log(datos);
      // console.log(datos.data.serie[0].valor);
      if(datos.data.serie.length > 0){
        this.valor = await datos.data.serie[0].valor;
      }else{
        this.valor = 'sin resultados';
      }
      
      
    } catch (error) {
      console.log(error);
      
    }
    finally{
      this.ocultarLoading()
    }

    }
  },

  created(){
    this.getDolar(this.fecha);
    // this.getDolar(this.fecha);
  }


  
} // export default
</script>
