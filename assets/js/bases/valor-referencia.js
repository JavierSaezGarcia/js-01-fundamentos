document.write('<h3> VALOR REFERENCIA </h3>');

let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// let juan = { nombre: 'Juan'}; // La referencia juan contiene el objeto de valor 'Juan'
// let ana = juan; // asigno a la referencia ana, la referencia juan; por tanto juan y ana apuntan al mismo lugar de la direccion del objeto { nombre: 'Juan'}
// ana.nombre = 'Ana'; // Asigno a la referencia el valor a la propiedad nombre 'Ana'
// console.log(juan, ana); // pero como las referencias juan y ana apuntan al mismo lugar y he modificado el valor pues ahora tienen lss dos referencias el valor 'Ana'
// Esto devuelve Ana             

// let juan = { nombre: 'Juan'}; 
// let ana = { juan }; // ahora ana tiene dentro otro objeto llamado juan que a su vez tiene la propiedad nombre y valor JJuan
// ana.nombre = 'Ana'; // le asignamos a ana la propiedad nombre y el valor Ana
// console.log('Prueba 1: ',{ juan, ana }); // nombre: 'Juan'
// pero esto anterior se ve raro y dificil de mantener para evitar esti esta el SPREAD

let juan = { nombre: 'Juan'}; 
let ana = { ...juan }; // ahora la referencia juan tiene el spread ...
ana.nombre = 'Ana'; // le asignamos a ana la propiedad nombre y el valor Ana
console.log('Prueba 1: ',{ juan, ana }); // nombre: 'Juan'



const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );
console.log({peter, tony}); // 'Tony', 'Tony'

// ARREGLOS
const frutas = ['Manzana','Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread')
// const otrasFrutas = frutas; // asi asignariamos la referencia frutas a otrasFrutas y modificando el contenido de otrasFrutas modificariamos tambnien frutas
const otrasFrutas3 = [...frutas]; // de esta forma asignamos a la referencia otrasFrutas el objeto [...frutas] y si añadimos objetos a otrasFrutas no modificariamos el array frutas
// Añadimos una fruta
 otrasFrutas.push('Naranja');
 console.table( {frutas, otrasFrutas} );






// *******************************************  EXPLICACION REST, SPREADN  *******************************************
// todo lo que este entre [ ] = arreglos { } = objetos
// REST:
// CUANDO LOS TRES PUNTOS ESTAN JUSTO ANTES DE LOS ARGUMENTOS QUIERE DECIR:
// UNE TODOS LOS ARGUMENTOS EN UNA SOLA VARIABLE (ARGS POR EJEMPLO) Y TRANSFORMALOS EN UN ARRAY
const potenciar = (exponente, ...bases) => {
    console.log(exponente)
    console.log(bases)
    return bases.map(x => x**exponente)
}
potenciar(3, 2, 3, 4, 5)
// console: 3 esto es el exponente
// console: [2, 3, 4, 5] estas son las bases que son argumentos con REST(...)
// return: [8, 27, 64, 125] y estos los resultados

// SPREAD:
// CUANDO LOS TRES PUNTOS ESTAN EN OTRO LUGAR QUE NO SEA UN ARGUMENTO(O PARAMETRO) DE UNA FUNCION.
// Y QUIERE DECIR:  SEPARA LOS ELEMENTOS Y COMBINALOS CON LO QE QUIERAS
const objeto1 = {
    a1: 'valor1',
    a2: 'valor2',
}
const objeto2 = {
    a3: 0,
    ...objeto1,
}
console.log(objeto1) // {a1: 'valor1', a2: 'valor'2}
console.log(objeto2) // {a3: 0, a1: 'valor1', a2:'valor2'} lee la propiedad y el valor de a3 y despues despliega las propiedades y valores de objeto 1
const l1 = [1,2,3]
const l2 = [...l1, 4, 5]
console.log(l1) // [1,2,3]
console.log(l2) // [1,2,3,4,5]


