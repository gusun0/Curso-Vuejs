Vue.component('padre',{
    template:
    `
    <div>
        <h1>desde elemento padre: {{numero}}</h1>
        <hijo></hijo>
    </div>
    `,

    computed:{

        ...Vuex.mapState(['numero'])
    }

    


})