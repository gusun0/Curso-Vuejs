<template>
<div>
   <h2>Fotos desde views</h2>
     <!-- a to le pasamos un objeto, Fotos viene de router.js -->
    <router-link :to="{name: 'Fotos', params: {id: item} }" 
    v-for="(item,index) of fotosArreglo" :key="index">
        <button>FOTO {{item}}</button>
    </router-link>

   <Fo /> 

    <!-- <router-link to="/">
   <button>HOME</button>
    </router-link> -->

    <button @click="home">HOME</button>
    <button @click="anterior">ANTERIOR</button>
    <button @click="siguiente">SIGUIENTE</button>
</div>
</template> 


<script>

import Fo from '@/components/Fotografia.vue'

export default {
//    name: 'Fotos',
    components:{
        Fo
    },
    data(){
        return{
            fotosArreglo: [1,2,3]
        }
    },

    methods:{

        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)
        }
    }
    
}
</script>

