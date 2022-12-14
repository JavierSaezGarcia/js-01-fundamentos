document.write('<h3> PROTIP RETURN </h3>');
// Esta funcion seria la tradicional
// function crearPersona( nombre, apellido ){
//     return {
//         nombre, // desde ECS6 si la propiedad es igual a la variable  basta con solo poner la propiedad: nombre:nombre >>> nombre
//         apellido
//     }
// }

// Ahora la misma funcion pero de flecha pero ojo al parentesis
const crearPersona = (nombre, apellido) => ({ nombre, apellido })// se pone llaves porque hay mas de una variable
                                                                 // los parentesis es para decirle a Javascript que lo que hay dentro del parentesis es un objeto
const persona = crearPersona( 'Javier', 'Saez');
console.log(persona);

// Otra funcion
function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Javier', 'Hola');

// SPREAD: La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo 
// o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos 
// (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de 
// valores clave (para literales Tipo Objeto) son esperados.
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6
  

// pero si la convertimos en una de flecha...
// const imprimeArgumentos2 = ( args ) => { console.log( args ) } // Da un error diciendo que no estan definidos los argumentos
// Con los tres puntos (parametro rest) le decimos que todos los argumentos que sean enviados create un arreglo con cada uno de ellos
// y no puede haber un argumento mas despues del parametro rest
// Y si queremos añadirlo lo debemos poner antes y con su variable
const imprimeArgumentos2 = ( ...args ) => { 
   // console.log({ args }) 
   return args
};
// const imprimeArgumentos2 = ( edad, ...args ) => { console.log({edad, args}) };


const misArguments = imprimeArgumentos2(10, true, false, 'Javier', 'Hola'); 
console.log( misArguments ); 
// pero si quisieramos el primer valor seria misArguments[0] y el segundo misArguments[1] ... y asi SERIA UN ROLLO
// para ello hariamos definir un array con las variables que queramos asociar:
const [ edad, casado, mili, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Javier', 'Hola'); 
// y despues hacer un log de dichas variables
console.log(edad, casado, mili, nombre, saludo);

// const persona2 = crearPersona('Javier', 'Saez');
// const { apellido } = crearPersona('Javier', 'Saez'); 
// console.log( apellido );
const { apellido: nuevoApellido } = crearPersona('Javier', 'Saez');
console.log( nuevoApellido );

/// DESTRUCTURACION DE ARGUMENTOS
// La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]



// ejemplo de Fernando
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// De la forma antigua
// const imprimePropiedades = ( personaje ) => {
//     console.log( personaje.nombre );
//     console.log( personaje.codeName );
//     console.log( personaje.vivo );
//     console.log( personaje.edad );
//     console.log( personaje.trajes );

// }

// Desestructurando
const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15 , trajes} ) => {
    console.log({nombre});
    console.log({codeName}); 
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
