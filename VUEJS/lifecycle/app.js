const app = new Vue({

    el: '#app',
    data: {
        mensaje: 'ciclo de vida de vue'
    },
    // retorna un objeto
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
    },

    beforeDestroy(){
        console.log('beforeDestroy');
    },

    destroyed(){
        console.log('destroyed');
    },

    methods:{
        destruir(){
           this.$destroy();
        }
    }



});