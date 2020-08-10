<template>
    <div>
        <ul class="list-group">
            <!--:key="item.id" => para indicarle que tiene elementos unicos -->
  <li v-for="(item,index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
  class="list-group-item d-flex justify-content-between align-items-center">
    {{index}} - {{item.nombre}}
    <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
  </li>

    <button class="btn btn-danger" @click="reiniciar">Borrar</button>
</ul>


    </div>    
</template>


<script>

import {mapState, mapMutations} from 'vuex';


export default {
    name: 'Lista',

    computed:{
        ...mapState(['frutas']),

        arrayOrdenado(state){
            //dentro de sort tenemos un punto de comparacion 
            return state.frutas.sort( (a,b) => b.cantidad - a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar','reiniciar'])
    }

}
</script>


