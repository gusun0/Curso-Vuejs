Vue.component('padre',{
    template:
    `
    <div>
        <h1>Desde componente padre: {{numero}}</h1>
        <hijo></hijo>
    </div>
    `,

    computed: {
        ...Vuex.mapState(['numero'])
    }
})