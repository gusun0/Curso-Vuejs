<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{query: {seccion: 1}}" class="btn btn-primary btn-block">1</router-link>
    <router-link :to="{query: {seccion: 2}}" class="btn btn-primary btn-block">2</router-link>
    <!-- <router-link :to="{query: {seccion: 3}}" class="btn btn-primary btn-block">3</router-link> -->
  </div>
</template>


<script>
export default {
  
  watch:{
    // este pendiente de la query que se llama seccion 
    "$route.query.seccion":{
      inmediate: true,
      handler(seccion){ // se puede poner solo un parametro, que seria newVal (newVal, oldVal)
        console.log(`seccion ha cambiado: ${seccion}`);
      } 
    }
  }
}
</script>
