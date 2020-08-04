const app = new Vue({
    
  el: '#app',
  data: {
    titulo: 'Hola Mundo en VueJs',
    frutas: [
        {nombre: 'Pera', cantidad: 10},
        {nombre: 'Manzana', cantidad: 0},
        {nombre: 'Naranja', cantidad: 20}
    ],

    nuevaFruta: '',
    total: 0

  },

  methods:{
      agregarFruta () {
          this.frutas.push({
           nombre: this.nuevaFruta, cantidad: 0         
        })
        this.nuevaFruta = '';
      }
  },

  computed:{
      sumarFrutas () {
        this.total= 0;
        for(fruta of this.frutas){
            this.total = this.total + fruta.cantidad;
        }
        return this.total;

      }
  }

})