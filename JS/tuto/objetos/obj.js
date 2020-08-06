var arreglo = ['1',2,true];
console.log(arreglo);

var objeto = {
    nombre: 'html',
    duracion: 15,
    estado: true,

    capitulos:{
        nombre: 'introduccion',
        capitulos: 20
    }
}

    console.log(objeto.capitulos.nombre);

    var arrayObjetos = [
        {
            nombre: 'html',
            estado: true
        },
        {
            nombre: 'ht',
            estado: true
        }
]

    for(let indice of arrayObjetos){
        console.log(indice.nombre);
    }

    var datos = [{"fecha":"2020-08-06T04:00:00.000Z","valor":774.82},{"fecha":"2020-08-05T04:00:00.000Z","valor":767.98},{"fecha":"2020-08-04T04:00:00.000Z","valor":761.34},{"fecha":"2020-08-03T04:00:00.000Z","valor":757.06},{"fecha":"2020-07-31T04:00:00.000Z","valor":754.45},{"fecha":"2020-07-30T04:00:00.000Z","valor":759.18},{"fecha":"2020-07-29T04:00:00.000Z","valor":767.82},{"fecha":"2020-07-28T04:00:00.000Z","valor":768.81},{"fecha":"2020-07-27T04:00:00.000Z","valor":768.63},{"fecha":"2020-07-24T04:00:00.000Z","valor":767.17},{"fecha":"2020-07-23T04:00:00.000Z","valor":769.06},{"fecha":"2020-07-22T04:00:00.000Z","valor":777.66},{"fecha":"2020-07-21T04:00:00.000Z","valor":786.04},{"fecha":"2020-07-20T04:00:00.000Z","valor":787.26},{"fecha":"2020-07-17T04:00:00.000Z","valor":787.5},{"fecha":"2020-07-15T04:00:00.000Z","valor":787.87},{"fecha":"2020-07-14T04:00:00.000Z","valor":788.22},{"fecha":"2020-07-13T04:00:00.000Z","valor":790.82},{"fecha":"2020-07-10T04:00:00.000Z","valor":781.74},{"fecha":"2020-07-09T04:00:00.000Z","valor":786.18},{"fecha":"2020-07-08T04:00:00.000Z","valor":793.88},{"fecha":"2020-07-07T04:00:00.000Z","valor":798.79},{"fecha":"2020-07-06T04:00:00.000Z","valor":801.46},{"fecha":"2020-07-03T04:00:00.000Z","valor":803.98},{"fecha":"2020-07-02T04:00:00.000Z","valor":816.29},{"fecha":"2020-07-01T04:00:00.000Z","valor":821.23},{"fecha":"2020-06-30T04:00:00.000Z","valor":816.36},{"fecha":"2020-06-26T04:00:00.000Z","valor":813.25},{"fecha":"2020-06-25T04:00:00.000Z","valor":820.68},{"fecha":"2020-06-24T04:00:00.000Z","valor":817.9},{"fecha":"2020-06-23T04:00:00.000Z","valor":816.02}];
    console.log(datos);

    for(let i of datos){
        console.log(i.valor);
    }
 