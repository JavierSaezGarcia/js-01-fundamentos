
document.write('<h3> ARRAYS </h3>');
// ARREGLOS
// Son un objetos muy parecido a una lista de informacion, que contiene un grupo de elementos
// Se empieza siempre en la posicion 0;

// 1- forma
const arr = new Array(10); // arreglo vacio de 10 elementos
console.log(arr);

// 2-forma
const arr1 = [];  // arreglo vacio
console.log(arr1);

let videojuegos = ['Mario 3','Megaman','Chrono Tiger'];
console.log( videojuegos[0] );

let arregloCosas = [
    true,
    123,
    'Javier',
    1 + 2,
    function() {},
    ()=> {},
    { a:1, b:'tree'},
    ['X', 'Megaman','Zero', 'Dr. Light', ['encuentrame','esto', { nombre: 'Luis', apellido: 'Saez'}]]
];

console.log(arregloCosas[0]); //        true
console.log(arregloCosas[2]); //        Javier
console.log(arregloCosas[7][3]); //     Dr. Light
console.log(arregloCosas[7][4][1]); //  esto
console.log(arregloCosas[7][4][2].apellido); // Saez

// METODOS Y PROPIEDADES 
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo:', juegos.length );
let primero = juegos[0];
let ultimo = juegos[ juegos.length -1 ];
console.log( primero, ultimo );

// recorrer arreglo
// (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
juegos.forEach( (elemento, indice, arr)=> {
    console.log( { elemento, indice, arr } );
});

// PUSH:  añade elementos a un arreglo y devuelve la nueva longiotud del mismo:  (method) Array<string>.push(...items: string[]): number
let nuevaLongitud = juegos.push('Superman');
console.log(nuevaLongitud, juegos ); // 5 (5) ['Zelda', 'Mario', 'Metroid', 'Chrono', 'Superman']

// UNSHIFT: Añade nuevos elementos al inicio del arreglo y devuelve el total del mismo.            
nuevaLongitud = juegos.unshift('Batman');
console.log(nuevaLongitud, juegos ); // 6 (6) ['Batman', 'Zelda', 'Mario', 'Metroid', 'Chrono', 'Superman']

// POP: Borra el ultimo elemento de un arreglo y lo devuelve.
let juegoBorrado = juegos.pop(); 
console.log( juegoBorrado, juegos ); // Superman (5) ['Batman', 'Zelda', 'Mario', 'Metroid', 'Chrono']

// SPLICE: Borra elementos de un array y si es necesario inserta un nuevo elemento en su lugar. Devuelve el elemento borrado
console.log(juegos); // (5) ['Batman', 'Zelda', 'Mario', 'Metroid', 'Chrono']
let posicionInicialBorrado = 1;
let posicionFinalBorrado = 2;
let juegosBorrados = juegos.splice( posicionInicialBorrado, posicionFinalBorrado ); // posicionInicial es 1 y como segundo parametro la posicionFinal que es dos.
console.log( juegosBorrados, juegos ); // (2) ['Zelda', 'Mario'] 0: "Zelda"1: "Mario"length: 2[[Prototype]]: Array(0) (3) ['Batman', 'Metroid', 'Chrono']

// INDEXOF: Devuelve el indice o posicion de la primera ocurrencia del valor buscado en el arreglo o -1 si no lo encuentra.
let metroidIndex = juegos.indexOf('Metroid'); // cuidado con poner el objeto con sus mayusculas si lo tiene
console.log( metroidIndex );
metroidIndex = juegos.indexOf('metroid');
console.log( metroidIndex ); // -1 significa que no lo encontro

//TODO: referencia
