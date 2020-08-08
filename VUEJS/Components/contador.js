Vue.component('contador',{

    template: //html    
    `
    <div>
    <h1>Desde contador</h1>
    <h3>{{numero}}</h3>
    <button @click="numero=numero+1">+</button>    
    </div>
    `,
    data(){
        return{
            numero: 0
        }
    }
    
    
})


