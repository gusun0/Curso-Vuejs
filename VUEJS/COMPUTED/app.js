    const app = new Vue ({

        el: '#app',
        data: {
            
            mensaje: 'hola soy x'
        },

        // para trabajar con lógica se usa computed 
        computed:{
            invertido(){
                return this.mensaje.split('').reverse().join('');
            }
        }

    });