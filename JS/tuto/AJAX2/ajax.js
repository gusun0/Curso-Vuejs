console.log('success');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){
    console.log('desde traer');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','catalogo.json',true); //true para que sea asincrono

    xhttp.send();

    // conseguimos una respuesta

    xhttp.onreadystatechange = function(){
        // preguntamos por los status
        if(this.readyState == 4 && this.status ==200){
            console.log(this.responseText);
            

        }

    }

}