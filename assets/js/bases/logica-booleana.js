document.write('<h3> LOGICA BOOLEANA </h3>');
console.log('=============== && =================');
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);     // true
// Negacion:
console.log(!true);    // false
console.log(!false);   // true
console.log(!!!!true); // true

console.log( !regresaTrue() ); // true

console.warn('And'); // Si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log( false && false ); // false
console.log( true && !false ); // true

console.log('=================');
console.log( regresaFalse() && regresaTrue() ); // false: javascript evita seguir porque la primera condicion ya regresa false por tanto ignora lo siguiente
console.log( regresaTrue() && regresaFalse() ); // false: en esta ocasion evalua las dos por que la primera da true hasta que llega a la segunda que es false

console.log('========&&=======');
regresaFalse() && regresaTrue(); // false
console.log('4 Condiciones &&: ', true && true && true && false); // false por el ultimo


console.log('=========OR || ==============');

console.warn('OR');
console.log( true || false ); // true, con que haya un true la salida es true
console.log( false || false ); // false

console.log( regresaTrue() || regresaFalse() ); // true, como ya regreso un true ya no hace falta seguir por que invariablemente va a ser true
console.log('4 Condiciones ||: ', true || true || true || false); // true a pesar del ultimo

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo'; // usaria siempre el ultimo valor para a1
const a2 = true && 'Hola mundo' && 150; // a2 = 150
// peroooooo
const a3 = false && 'Hola mundo' && 150 && 'eval';  // En este caso como empieza con un false 
                                                    // ya no sigue evaluando y si el false estuviera en otra posicion se pararia ahi
console.log({ a1, a2, a3 });

const a4 = 'Hola' && 'Mundo';
console.log(a4);    // Mundo: Evalua el primero despues el segundo y se queda con el ultimo valor

const a5 = 'Hola' || 'Mundo';
console.log(a5);    // Hola: Toma el primero que no es falso por el OR

const a6 = soyFalso || 'Ya no soy falso';
console.log(a6); // Ya no soy falso: como el primero es falso sigue buscando un true hasta que lo encuentra

const a7 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true || 'No me veo';
console.log(a7);  // primero el primero es un falso, el segundo no tiene valor y el tercero tampoco hasta que encuentra el siguiente que si tiene valor
                  // pero los siguientes no los muestra porque ya encontro uno con valor