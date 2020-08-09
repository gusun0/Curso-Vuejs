Vue.component('hijo',{

    template:
    `
    <div class=" py-5 bg-success text-center">
    <h1>hola</h1>
    <h3>{{numero}}</h3>
    </div>
    `,
    // recibimos informacion 
    props: ['numero']
})

// new Vue({
//     el: '#app'
// });

