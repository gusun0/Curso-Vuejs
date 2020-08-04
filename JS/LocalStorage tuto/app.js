// local storage: guarda cadenas de texto, clave => valor
// set => guarda
// get => obtener 


//const nombre = "Abraham";
//localStorage.setItem('nombreUsuario',nombre);

const nombreLocalStor = localStorage.getItem('nombreUsuario');
console.log(nombreLocalStor);

localStorage.removeItem('nombreUsuario');   