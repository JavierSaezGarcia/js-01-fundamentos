document.write('<h3> SPREAD </h3>');
// SPREAD (...)
/* La sintaxis extendida o spread sintax permite:
- A elementos iterables ( array, cadena...) ser expandidos donde se esperan 
  cero o más argumentos (para llamadas de funcion) o elementos ( para Array de literales)
- A un objeto ser expandido en lugares donde se esperan cero o más 
  pares de valores clave (para literales Tipo Objeto)*/

  // SINTAXIS
  // Para arrays literales o cadenas
  // [...objetoIterable, 'a' , 'caracola', 7];

  // Para llamadas a funciones
  // myFunction(...objetoIterable);

  // Para literales de tipo Object
  // let objClone = { ...obj };

// ARRAY
console.log(Math.max(5,2,7));
let array = [5,2,7];
// en este caso no entiende la funcion max el contenido de este array para calcular el mayor y devuelve Nan
console.log(Math.max(array));// Nan.
// en este caso con spread le decimos 'eh itera este array valor a valor
console.log(Math.max(...array)); // 7
let array2 = [2,6,8];
console.log(Math.max(...array, ...array2, 5)); //  Devuelve 8 que es el maximo de todos

// Concatenar arrays en uno
let arrayResultante = [...array, ...array2];

// Copiar un array en otro array
let arraCopia = [...array2];

// CADENAS 
let saludo = 'Hola cariño';
console.log(...saludo);
console.log([...saludo]);

// FUNCIONES
function suma ( a, b, c ){
   return a + b + c;
}
const valores = [ 1,3,5 ];
console.log(suma(...valores)); // sin el spread daria undefined

// OBJETOS
let persona1 = {nombre: "Ada", nacimiento: 1815};
let persona2 = {nombre2: "Charles", nacimiento2: 1791};
let clonAda = {...persona1};
console.log(clonAda);
let adaCharles = {...persona1, ...persona2};
console.log(adaCharles);





// MAS EJEMPLOS


console.clear()
// 1. Copying an array

let frutas = ['Apple','Orange','Banana'];

let newFruitArray = [...frutas];

console.log(newFruitArray); // ['Apple','Orange','Banana']

// 2. Concatenating arrays

let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

// 3. Spreading elements together with an individual element

let frutas2 = ['Apple','Orange','Banana'];

let newFruits = ['Cherry', ...frutas2];

console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']


// 4. Spread syntax for object literals

let obj1 = { id: 101, name: 'Jhon Doe' }

let obj2 = { age: 25, country: 'USA'}

const employee = { ...obj1, ...obj2 }

console.log(employee); //{ "id": 101, "name": "Jhon Doe", "age": 25, "country": "USA" }