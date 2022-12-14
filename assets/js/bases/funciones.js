document.write('<h3> FUNCIONES </h3>');
// FUNCIONES VOID O SIN RETORNO O QUE DEVUELVE UNDEFINED
// Es buena practica definir la funcion antes de llamarla
function saludar(){
    console.log(arguments) // toda funcion tradicional tiene implicito los arguments
    console.log('Hola mundo');
}
saludar();
// Otra forma de definir funciones: FUNCION ANONIMA
// Al asignarla a una constante es para que no se modifique la funcion
const saludar2 = function(nombre){
    console.log('Hola ' + nombre + ' desde funcion anonima');
}
saludar2('Luis');


// Con argumentos:
function saludar3(nombre){
   
    console.log('Hola ' + nombre);
}

saludar3('Javier');

// Flecha
const saludarFlecha = ( nombre ) => { 
    console.log('Hola ' + nombre) 
}
console.log(saludarFlecha('Laura'));

// FUNCIONES CON RETURN O QUE DEVULEVEN ALGO
function saludarReturn ( nombre ){
    console.log('Hola ' + nombre);
    return 10;
    console.log('esto no se ejecutara ');
}
saludarReturn('Javi');

function sumar( a, b){ return a + b }
console.log( sumar(2, 4));

// lo mismo pero de flecha
// const multiplicar = ( a, b ) => { return a * b }; 
// quitamos llaves y return porque es todo en una linea
const multiplicar = ( a, b ) => a * b; 

console.log( multiplicar(45,34) );

function getAleatorio() {
    return Math.random();    
}
console.log( getAleatorio() );
// La anterior transformadda a flecha

const getAleatorio2 = () => Math.random()*100; // Observamos que como no enviamos parametros se pasan los parentesis vacios
console.log( getAleatorio2() );