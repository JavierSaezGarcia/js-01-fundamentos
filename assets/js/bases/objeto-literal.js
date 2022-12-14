document.write('<h3> OBJETOS, LITERALES </h3>');
// Los objetos literales son como en Python los diccionarios es decir pares de clave valor
// LITERALES: Entre llaves y dentro separados por comas la clave :  valor
// si asignamos el nombre del objeto literal a una constante podemos hacer todos los propesos siguintes menos asignarle algo distinto 
// a personaje por ejemplo const personaje = 123;
const personaje = { // objeto literal con pares de valores
    nombre: 'Tony Stark', // Primer par clave.valor
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity war' // si queremos poner en el nombre de la propiedad un caracter como guiones o puntos hay que ponerla entre comillas
};
// las propiedades se mostraran de forma alfabetica en la consola
console.log('Nombre: ', personaje.nombre ); // con el punto
console.log('Nombre: ', personaje['nombre'] ); // con llaves cuadradas y el nombre de la propiedad entre comillas
console.log( personaje.edad ); // edad
console.log( 'Latitud' , personaje.coords.lat );

// ¿Numero de trajes de Ironman?
console.log('Numero trajes:' , personaje.trajes.length);

// Ultimo traje?
console.log('Ultimo traje:' , personaje.trajes[ personaje.trajes.length - 1 ]);

// pasando el nombre de la propiedad entre corchetes obtenemos el resultado
const x = 'vivo';
console.log('Vivo', personaje[x]); // 'Vivo' false

// Ahora rescatamos el valor de ultima-pelicula
console.log('Última película', personaje["ultima-pelicula"]); // he puesto la anotacion de punto pero vsCode me lo ha cambiado por corchetes automaticamente

// Más detalles
// DELETE
// si quiero borrar la propiedad edad ¿ como lo hago?
personaje.edad = null; // esto no la borra solo le asigna el valor null a la propiedad
// Usariamos delete antes de la propiedad que queremos eliminar
delete personaje.edad
console.log(personaje);

// INCLUIR UNA NUEVA PROPIEDAD POR EJEMPLO LA PROPIEDAD CASADO: BOOLEANO EN ESTE CASO LO HARIAMOS A TRUE
personaje.casado = true;
console.log(personaje);

// HACER PARES VALORES CON ENTRIES
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// SI LO QUE QUEREMOS EL HACER EL OBJETO INAMOVIBLE SERIA:
Object.freeze( personaje ); // Con freeze congela las propiedades pero no los objetos de dentro
console.log(personaje.edad) // undefined
personaje.direccion.ubicacion = 'Puerto Sagunto';

personaje.dinero = 10000000; // No se muestra

// SI QUEREMOS CONOCER TODAS LAS PROPIEDADES DEL OBJETO
const propiedades = Object.getOwnPropertyNames( personaje );
console.log( propiedades ); // nos devuelve un array de propiedades
console.log({ propiedades }); // entre corchetes nos devuelve un array de propiedades con el nombre propiedades

const valores = Object.values( personaje );
console.log({ propiedades, valores });






