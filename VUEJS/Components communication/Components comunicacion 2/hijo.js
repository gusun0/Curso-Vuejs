Vue.component('hijo',{

    template:
    `
    <div class="p-5 bg-success">
        <h2>Componente hijo: {{numero}}</h2>
        <h4>{{nombreHijo}}</h4>
    </div>
    `,
    props: ['numero'],
    
    data(){
        return{
            nombreHijo: 'Jesus'
        }
    },

      //del ciclo de vida de vuejs, 
      mounted(){
        // $emit -> emitimos un evento
        this.$emit('nomhijo',this.nombreHijo); 
    }
})