document.write('<h3> WHILE Y DO-WHILE </h3>');

const coches = ['Ford','Toyota','Honda','Renault','Cupra'];
// SI LA CONDICION ENTRE PARENTESIS ES TRUE SIGUE REPITIENDO EL CICLO
let i = 0;
// while( i < coches.length ) {
//     console.log( coches[i] );
//     i++;
// }

// Sería lo mismo
while( coches[i] ) {
    if( i === 1 ){
        // break;
        console.log('Ahora i vale 1');
        i++;
        continue;
        
    }

    console.log( coches[i] );
    i++;
}

// DO-WHILE SIEMPRE SE EJECUTA UNA VEZ AL MENOS
console.warn('Do While');

let j = 0;

do {
    console.log( coches[j]);
    j++;

} while( coches[j] );
