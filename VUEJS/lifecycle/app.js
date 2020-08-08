const app = new Vue({

    el: '#app',
    data: {
        mensaje: 'ciclo de vida de vue'
    },

    beforeCreate(){
        console.log('beforeCreate');
    },

    created(){
        console.log('created');
    },

    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },

    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    }



});