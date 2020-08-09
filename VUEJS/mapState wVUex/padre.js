Vue.component('padre',{
    
    template:
    `
    <div>   
        <h1>Desde Componente padre: {{numero}}</h1>
        <hijo></hijo>
    </div>
    `,

    //propiedad computada para no poner completo el {{$store.state.numero}}
    computed:{
        //USANDO mapState
        ...Vuex.mapState(['numero'])

        // numero(){
        //     return store.state.numero;
        // }
    }

})