Vue.component('hijo',{
    template:
    `
    <div>
        <button @click="$store.commit('aumentar')">+</button>
        <h2>Desde componente hijo: {{$store.state.numero}}</h2>
    </div>
    `
})