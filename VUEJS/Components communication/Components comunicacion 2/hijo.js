Vue.component('hijo',{

    template:
    `
    <div class="p-5 bg-success">
        <h2>Componente hijo: {{numero}}</h2>
        <h4>{{nombreHijo}}</h4>
        <h5>{{edadHijo}}</h5>
    </div>
    `,
    props: ['numero'],
    
    data(){
        return{
            nombreHijo: 'Jesus',
            edadHijo: 10
        }
    },

      //del ciclo de vida de vuejs, 
      mounted(){
        // $emit -> emitimos un evento
        this.$emit('nomhijo',this.nombreHijo); 
        this.$emit('edhijo',this.edadHijo);
    }
})