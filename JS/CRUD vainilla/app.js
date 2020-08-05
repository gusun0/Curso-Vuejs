//variables globales
const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades'); //solo selecciona id
let arrayActividades = [];


//funciones
const CrearItem = (actividad) => {

    let item = {
        actividad: actividad,
        estado: false
    }
    arrayActividades.push(item);
    return item;
}

const GuardarDB = () => {
    localStorage.setItem('rutina',JSON.stringify(arrayActividades)); // se pone en formato json por que no se pueden guardar arrays en local storage

    PintarDB();
}


const PintarDB = () =>{
    listaActividadesUI.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem('rutina'));

    if(arrayActividades === null){
        arrayActividades = [];
    }else{
        arrayActividades.forEach(element => {
            
            listaActividadesUI.innerHTML += `        
            <div class="alert alert-danger" role="alert">
            <span class="material-icons float-left mr-2">
                accessibility
            </span> 
                
            <b>${element.actividad}</b> - ${element.estado}
            <span class="float-right">
                <span class="material-icons">
                    done
                </span>
                <span class="material-icons">
                    delete
                    </span>

            </span>                 
          </div>`;
        });
    }

}

//eventslistener

formularioUI.addEventListener('submit',(e)=>{
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;

    
   CrearItem(actividadUI);
    GuardarDB();
   formularioUI.reset();
});

// EL DOM 
document.addEventListener('DOMContentLoaded', PintarDB);

/*listaActividadesUI.addEventListener('click', (e) => {
    
    e.preventDefault();
    console.log(e);
});*/

