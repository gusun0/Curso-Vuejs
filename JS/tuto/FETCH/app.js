
var documento = document.querySelector('#contenido');

function traer(){

    fetch('texto.txt')
    .then(data => data.text()) // empleamos funcion arrow, transforma nuestro archivo 
    .then(data =>{
        console.log(data);
        
        documento.innerHTML = `${data}`;
    })
    //documento.innerHTML = `ssss`;
}