Vue.component('hijo',{
    template: 
    `
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuye(2)">-</button>
        <button @click="obtenerCursos">Obtener</button>
        <h1>Desde componente hijo: {{numero}}</h1>
        <ul v-for="item of cursos">
            <li>{{item.nombre}}</li>

        </ul>


    </div>
    `,

    computed:{
        ...Vuex.mapState(['numero','cursos'])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuye']),
        ...Vuex.mapActions(['obtenerCursos'])
    }
})