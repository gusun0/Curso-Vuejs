    const app = new Vue ({

        el: '#app',
        data: {
            
            contador: 0,
            mensaje: 'hola soy x'
        },

        // para trabajar con lógica se usa computed 
        computed:{
            
            invertido(){
                return this.mensaje.split('').reverse().join('');
            },

            color(){
                return{
                    // estamos retornando un objeto 
                    'bg-success' : this.contador <= 10,
                    'bg-warning' : this.contador > 10 && this.contador < 20,    
                    'bg-danger' : this.contador >= 20
                }
            }
        }

    });