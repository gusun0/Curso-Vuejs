Vue.component('padre',{
    template:
    `
    <div class="p-5 bg-dark text-white mt-3">
        <h1>Componente padre: {{numeroPadre}}</h1>
        <button class="btn btn-primary my-3" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nomhijo="nombrePadre= $event"></hijo>        
    </div>
    `,
       data(){
        return{
            numeroPadre: 0,
            nombrePadre: ''
        }
    }

  
})