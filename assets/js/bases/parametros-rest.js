document.write('<h3> PARAMETROS REST ... </h3>');
// PARAMETROS REST (...parametros)
// La sintaxis de los parametros rest nos permiten representar un número indefinido de argumentos como un array
// Existe un elemento en javascript que se llama "arguments" que es un OBJETO iterable NO un array pero no es lo mismo que rest(...) que si es un array
// Con REST podemos usar todos los metodos de los arrays en el como push o map por ejemplo
// SINTAXIS
/* function( a, b, ...masArgumentos){
    // ...
}
*/
// ES5
function miLista( a,b){
    console.log('ARGUMENTS');
    console.log("a="+a);
    console.log("b="+b);
    console.log("Resto de elementos de la lista: " , arguments);
    console.log("Tamaño: " + arguments.length);
    console.log(arguments[2]);
}
miLista("pera","manzana","zanahoria","melon",'limon','aguacate');

// ES6
function miLista2( a,b, ...otrosElementos){
    console.log('REST');
    console.log("a="+a);
    console.log("b="+b);
    console.log("Resto de elementos de la lista: " , otrosElementos);
    console.log("Tamaño: " + otrosElementos.length);
    console.log(otrosElementos[2]);
}
miLista2("pera","manzana","zanahoria","melon",'limon','aguacate');