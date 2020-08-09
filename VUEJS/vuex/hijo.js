Vue.component('hijo',{
    template:
    `
    <div>
    <button @click="$store.commit('aumentar')">+</button>
    <h1>numero en componente hijo: {{ $store.state.numero }}</h1>
    </div>  
    `
})

// /* <button @click="$store.state.numero++">+</button> */