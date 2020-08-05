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

            if(element.estado){
                listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><span class="material-icons float-left mr-2">
                accessibility</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`;
     

            }else{

                listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><span class="material-icons float-left mr-2">
                    accessibility</span><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`;
            }
    }
    );
            
    }

}

const EliminarDB = (actividad) => {
    //console.log(actividad);
    let indexArray;
    arrayActividades.forEach((elemento, index) => {
        if(elemento.actividad === actividad){
            indexArray = index;
        }
    });
    arrayActividades.splice(indexArray,1);
    GuardarDB();
}

const EditarDB = (actividad) =>{
    let indexArray = arrayActividades.findIndex((elemento) => {
       return elemento.actividad === actividad        
    });
    console.log(arrayActividades[indexArray]);
    arrayActividades[indexArray].estado = true;
    GuardarDB();
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

listaActividadesUI.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    //console.log(e.target.innerHTML);
    
    if(e.target.innerHTML === 'done' || e.target.innerHTML == 'delete'){
        //console.log('accion del done');
        //  console.log(e);
       // console.log(e.path[2].childNodes[1].innerHTML);
       let texto =  e.path[2].childNodes[1].innerHTML;
    if(e.target.innerHTML === 'delete'){
        EliminarDB(texto);
    }

    if(e.target.innerHTML === 'done'){
        //accion de editar
        EditarDB(texto);
    }
    
    }
});

