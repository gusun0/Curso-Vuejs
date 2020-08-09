Vue.component('hijo',{

    template:
    `
    <div class=" py-5 bg-success text-center">
    <h1>hola: {{numero}}</h1>
    </div>
    `,
    // recibimos informacion 
    props: ['numero']
})

// new Vue({
//     el: '#app'
// });

