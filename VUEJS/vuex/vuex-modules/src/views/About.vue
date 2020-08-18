<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item,index) in tareasState" :key="index">{{item}}</h2>
    <h3>{{contador}}</h3>
    <h4>{{hola}}</h4>
    <h5>{{contador2}}</h5>
    <button @click="aumentarContador(1)">+</button>
    
  </div>
</template>


<script>

import {mapState, mapMutations} from 'vuex';



export default {
  computed:{
    // este state unicamente pertenece al modulo de tareas 
    ...mapState ('tareas',['tareasState','contador']),
    // de forma global 
    ...mapState (['hola']),
    //de state contador 
    ...mapState('contador',['contador2'])
  },
  methods:{
    ...mapMutations('contador', ['aumentarContador'])
  }


  
}
</script>
