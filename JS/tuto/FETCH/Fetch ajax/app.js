

var documento = document.querySelector('#contenido');

function traer(){

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    
    .then(data => {
        console.log(data.results[0]);
        console.log(data.results[0].name);
        documento.innerHTML = `
        <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
            <p>Nombre: ${data.results[0].name.first}</p>
        
        `;

    })

    
    


    // .then(data => {

    //     console.log(data);
    //     documento.innerHTML = `${data}`;
    // })

    //documento.innerHTML = `ss`;
}