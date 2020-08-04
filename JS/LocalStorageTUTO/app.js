//variblesglbales
const BtnBotones = document.querySelector('#BtnBotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

//IIFE => FUNCIONES QUE SE EJECUTAN AUTOMATICAMENTE 
(()=>{

    BtnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);

})();


(()=>{

    const color = localStorage.getItem('colorFondo');
    if(color === null){
        fondo.className = 'bg-dark';
    }else{
        fondo.className = color;
    }

})()

function delegacion(e){
    e.preventDefault();
   // console.log(e.target.classList[1]);
    const colorBoton = e.target.classList[1];

    switch(colorBoton){
        case ('btn-primary'):
            fondo.className = 'bg-primary';
            localStorage.setItem('colorFondo', "bg-primary");
            // .className => para renombrar una clase
            //console.log('diste click en prmiary');
        break;

        case ('btn-secondary'):
            fondo.className = 'bg-secondary';
            localStorage.setItem('colorFondo', "bg-secondary");
        break;

        case ('btn-danger'):
            fondo.className = 'bg-danger';
            localStorage.setItem('colorFondo',"bg-danger");
        break;

        case ('btn-success'):
            fondo.className = 'bg-success';
            localStorage.setItem('colorFondo',"bg-success");
        break;

        case ('btn-warning'):
            fondo.className = 'bg-warning';
            localStorage.setItem('colorFondo',"bg-warning");
        break;
    }

}


function agregarBotones(e){
    e.preventDefault(); // para prevenir que no se ejecuten cosas que no queremos ejecutar
   // console.log('Diste click en el boton negro');
   // ` `  template literales 
   botones.innerHTML = ` 
    <button class="btn btn-primary">Primary</button>
           <button class="btn btn-secondary">Secondary</button>
           <button class="btn btn-danger">Danger</button>
           <button class="btn btn-success">Success</button>
           <button class="btn btn-warning">Warning</button>`;


}