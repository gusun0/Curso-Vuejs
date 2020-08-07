// console.log('success');

document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){
  //  console.log('desde traer');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','catalogo.json',true); //true para que sea asincrono

    xhttp.send();

    // conseguimos una respuesta

    xhttp.onreadystatechange = function(){
        // preguntamos por los status
        if(this.readyState == 4 && this.status ==200){
            // console.log(this.responseText);
            
            let datos = JSON.parse(this.responseText);
              console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = ``;
            // console.log(res);

            for (let valor of datos){                 
            // console.log(valor.titulo);
            res.innerHTML += `
            <td>${valor.titulo}</td>
            <td>${valor.artista}</td>
            `
            }

        }

    }

}