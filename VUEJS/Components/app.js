Vue.component('saludo',{
//tiene que estar en un contenedor lo del template 
    template: `
    <div>
    <h1>{{saludo}}</h1>
    <h3>ssdfdsf</h3>
    </div>
    `,
    data(){
        return{
            saludo: 'hola'
        }
    }
})


new Vue ({
    el: '#app',
    data: {
    }
});