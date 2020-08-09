Vue.component('padre',{
    template: //html    //con los dos puntos hacemos un v-bind
    `
    <div class="p-5 bg-dark text-white ">
        <h2>Componente PADRE: {{numeroPadre}}</h2>     
        <button class="btn btn-primary my-2" @click="numeroPadre++">+</button>
        <hijo :numero="numeroPadre"></hijo> 
    </div>

    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
})

// new Vue({
//     el: '#app'
   
// });