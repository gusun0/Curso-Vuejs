export default{

    namespaced: true, 
    state:{
        contador2: 1
    },
    mutations:{
        aumentarContador(state,payload){
            state.contador2 = state.contador2 + payload
        }

    },
    actions:{

    },
    getters:{

    }
}