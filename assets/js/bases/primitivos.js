document.write('<h3> DATOS PRIMITIVOS </h3>');
// TIPOS DE DATOS PRIMITIVOS SON 6 : STRING, BOOLEANO, NUMBER, NULL, UNDEFINED, SYMBOL
///////  1-STRINGS   ///
let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );

nombre = "Tía May";
nombre = `Tía May`;
console.log( typeof nombre ); // string

nombre = 123;
console.log( typeof nombre );

//////////////// 2-BOOLEANOS  /////
let esMarvel = false;
console.log( esMarvel ); // boolean

///////  3- NUMBERS  ///////
let edad = 23.345;
console.log( typeof edad ); // number

// En Javascript
///////  4-UNDEFINED   /////
let superPoder;
console.log( superPoder ); // undefined
// en python let super_poder_de_spider_man

////////  5-NULL   /////
let soyNull = null;
console.log( typeof soyNull ); // object

///////  6-SYMBOL   /////
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1); // symbol

console.log( symbol1 === symbol2 ); // false

// En Javascript TODOS SON OBJETOS EXCEPTO LOS PRIMITIVOS





