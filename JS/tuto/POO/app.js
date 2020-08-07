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

class Serie extends Pelicula{

    constructor(nombre,id,cap){
        super(nombre,id); //indicamos que ocupara los mismos parametros que su clase padre
        this.cap = cap;
    }

    reproducirCapitulo(){
        return `reproduciendo capitulo...`
    }
}

const peliculaUno = new Pelicula('dulce',1);
const peliculaDos = new Pelicula('ivonne',2);
const serieUno = new Serie('Breaking Bad',3,12);

console.log(peliculaUno.reproducir());
console.log(peliculaDos);
console.log(serieUno);
