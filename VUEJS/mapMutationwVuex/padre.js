Vue.component('padre',{
    template: 
    `
    <div>
        <h1>desde componente padre: {{numero}}</h1>
        <hijo></hijo>
    </div>
    `,
     //propiedad computada para no poner completo el {{$store.state.numero}}
     computed:{
         //usando mapState  
         ...Vuex.mapState(['numero'])

     }
})