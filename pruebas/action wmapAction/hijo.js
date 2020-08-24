Vue.component('hijo',{

    template: 
    `
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuir">-</button>
        <button @click="obtenerCursos">Obtener</button>
        <h3>desde elemento hijo: {{numero}}</h3>
        <ul v-for="item of cursos">
            <li>{{item.nombre}}</li>
        </ul>
    </div>
    `,

    computed:{
        ...Vuex.mapState(['numero','cursos'])
    },


    methods:{

        // ...Vuex.mapState(['numero']),

        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    }

})