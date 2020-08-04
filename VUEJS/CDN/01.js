const app = new Vue(
    {
        el:  '#app',
        data:{
            
           titulo: 'hola mundo con vue',
           frutas: [

                {nombre: 'Pera', cantidad: 0},
                {nombre: 'Manzana', cantidad: 10},
                {nombre: 'Naranja', cantidad: 20}

           ]
        }

    })