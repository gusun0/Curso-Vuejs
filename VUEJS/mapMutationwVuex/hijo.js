Vue.component('hijo',{
    template:
    `
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuye(2)">-</button>
        <h2>desde componente hijo: {{$store.state.numero}}</h2>
    </div>
    `,
    methods:{
        // se utliza para methods, disminuy tiene parametro 
        ...Vuex.mapMutations(['aumentar','disminuye'])
    }
})