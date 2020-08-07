const PeliculaUno = {

    nombre: 'harry',
    id: 01,
    reproducir(){
        return `reproduciendo pelicula .... ${this.nombre}`;
    }
}

// console.log(PeliculaUno);

// console.log(PeliculaUno.reproducir());

class Pelicula{
    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){
        return `reproduciendo pelicula ${this.nombre}`;
    }

}

const peliculaUno = new Pelicula('dulce',1);
const peliculaDos = new Pelicula('ivonne',1);
console.log(peliculaUno.reproducir());
console.log(peliculaDos);
