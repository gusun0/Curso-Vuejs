console.log('hola');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
  //  console.log('funcion activada');

    const xhttp = new XMLHttpRequest(); //instanciamos a nuestro objeto

    xhttp.open('GET','texto.txt',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        document.querySelector('#respuesta').innerHTML = this.responseText;

        }
    }
}