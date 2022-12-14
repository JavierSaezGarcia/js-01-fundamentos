document.write('<h3>PROTIP TERNARIO </h3>');

// const elMayor = (a, b) => {
//     return ( a > b ) ? a : b;
// }
// seria lo mismo
const elMayor = (a, b) => ( a > b ) ? a : b;
console.log( elMayor(15,3) );

const tieneMembresia = ( miembro ) => (miembro) ? 'Debe pagar 2 Euros' : 'Debe pagar 10 Euros';
console.log( tieneMembresia(false) );

let amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(15,5)
]
console.log( amigosArr ); //  ['Peter', 'Tony', 'Dr. Strange', 'Thor', 15]

amigo = false;
console.log( amigosArr ); //  ['Peter', 'Tony', 'Dr. Strange', 'Loki', 15]


const nota = 100; // A+ A B+ ....
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log( { nota, grado });