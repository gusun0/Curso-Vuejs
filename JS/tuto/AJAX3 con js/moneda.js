// console.log('todo fine');

document.querySelector('#dolar').addEventListener('click',function(){
    // ponemos otra funcion para tener parametros
    obtenerDatos('dolar');            
});

document.querySelector('#uf').addEventListener('click',function(){
    // ponemos otra funcion para tener parametros
    obtenerDatos('uf');            
});

function obtenerDatos(valor){
    console.log('diste click');

    let url = `https://mindicador.cl/api/${valor}`;
       

    //consultamos con AJAX
    const api = new XMLHttpRequest();

    api.open('GET',url,true);

    api.send();
    
    // retorna una funcion
    api.onreadystatechange = function(){
        if(api.readyState == 4 && api.status == 200){
            // console.log(this.responseText);
            // convertimos el this.responseText a un array 
            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);

            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            let i =0;

            for (let valor of datos.serie){
                // console.log(valor);
                i++;
                resultado.innerHTML += `<li>${valor.fecha.substr(0,10)} | ${valor.valor}</li>`

                if(i>10){
                    break;
                }
            }

        }
    }
         
    

}