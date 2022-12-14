document.write('<h3> OPERADOR TERNARIO </h3>');
/**
 * Dias de la semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 * 
 *  
 */
// Entra en un sitio web para ver si esta abierto hoy...
const dia = 1; // 0: domingo... 1: Lunes
const horaActual = 6;

let horaApertura = 0;
let mensaje = '';  // Esta abierto , Esta cerrado, hoy abrimos a las XX

// if( dia === 0 || dia === 6) {  // antes se haria asi
// Ahora podemos hacerlo con includes que busca si esta un valor entre un array de valores
// if( [0,6].includes( dia )) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia semana');
//     horaApertura = 11;
// }
// aunque todo lo anterior se puede reducir a ternario
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// Forma antigua
// if( horaActual >= horaApertura ){
//     mensaje= 'Esta abierto';

// }else{
//     mensaje= `Está cerrado hoy abrimos a las ${ horaApertura }`;
// }

mensaje = (horaActual >= horaApertura ) ? 'Esta abierto' : `Está cerrado hoy abrimos a las ${ horaApertura }`;

console.log( { horaApertura, mensaje });