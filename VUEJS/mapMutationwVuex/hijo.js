Vue.component('hijo',{
    template:
    `
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuye">-</button>
        <h2>desde componente hijo: {{$store.state.numero}}</h2>
    </div>
    `,
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuye'])
    }
})