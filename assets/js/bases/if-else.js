document.write('<h3> IF-ELSE </h3>');
let a = 5;

if (a < 10){
    console.log('Menor de 10');
} else {
    console.log('Mayor a 10');
}
console.log('Fin de programa');

const hoy = new Date();
console.log(hoy);

let dia = hoy.getDay(); // {}
console.log( dia ); // 0: domingo, 1: lunes .... 5: viernes

if( dia === 0 ){
    console.log('Es Domingo');
}else if( dia === 1 ) {
    console.log('No es Lunes');
}else{
    console.log('No es ni lunes ni domingo');
}

//Ternario
// condicion ? valor si es verdadera : valor si es falsa
dia >= 5 ? console.log('Es finde por fin') : console.log('Mierda no es viernes');

// sin usar If Else o Switch unicamente con objetos
//dia = 0// 0: domingo 1: lunes

// Con array
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

// Con objeto
const diasLetras= {
    0: 'Domingo', 
    1: 'Lunes', 
    2: 'Martes', 
    3: 'Miercoles', 
    4: 'Jueves', 
    5: 'Viernes', 
    6: 'Sabado'
};

const diasFunciones = {
    0: () => 'Domingo - 0', 
    1: () => 'Lunes - 1', 
    2: () => 'Martes - 2', 
    3: () => 'Miercoles - 3', 
    4: () => 'Jueves - 4', 
    5: () => 'Viernes - 5', 
    6: () => 'Sabado - 6'
}

if ( dia >= 0 && dia <=7 ) {
     
    console.log(` Hoy es: ${ diasSemana[ dia ] } ` );      // Obtenemos el valor por la posicion del array que corresonde al numero de dia
    console.log(` Hoy es: ${ diasLetras[ dia ] } ` );      // Obtenemos el valor del objeto pasando la clave numero del dia
    console.log(` Hoy es: ${ diasFunciones[ dia ]() } ` ); // Con los parentesis ejecuamos la funcion


}else{
    console.log('Dia de la semana no correcto');
}

