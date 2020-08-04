const app = new Vue(
    {
        el: '#app',
        data:{

            titulo: 'Hola Mundo con Vue',
            frutas:[
                {nombre: 'Pera', cantidad: 0},
                {nombre: 'Manzana', cantidad: 10},
                {nombre: 'Na    ranja', cantidad: 20}
            ],  

           nuevaFruta: '',

        },

        methods:{
            agregarFruta () {
                //console.log('diste click');
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:10
            })
                
        }
    }
    })