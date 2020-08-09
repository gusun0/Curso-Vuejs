Vue.component('padre',{
    template:
    `
    <div class="p-5 bg-dark text-white mt-3">
        <h1>Componente padre: {{numeroPadre}}</h1>
        <button class="btn btn-primary my-3" @click="numeroPadre++">+</button>
        {{nombrePadre}} 
        {{edadPadre}}
        <hijo :numero="numeroPadre" @nomhijo="nombrePadre= $event"></hijo>     
        <hijo @edhijo="edadPadre=$event"></hijo>   
    </div>
    `,
       data(){
        return{
            numeroPadre: 0,
            nombrePadre: '',
            edadPadre: ''
        }
    }

  
})