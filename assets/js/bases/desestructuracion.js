document.write('<h3> DESESTRUCTURACION </h3>');
// DESESTRUCTURACION:
// Es la capacidad de extraer atributos hacia variables con el mismo nombre

//*************************************************************************** */
// 1.- Desestructuracion de arrays ( desestructuracion basica ): asignamos variables a cada posicion del array para extraer los valores
const cv = ['Valencia','Alicante','Castellón','Murcia'];
const [primer, segun, tercer, cuarto, quinto ] = cv;
console.log(primer, segun, tercer, cuarto, quinto); // se asignaria en orden hasta llegar al quinto que seria undefined

// *************************************************************************** */
// 2.- desestructuración de arrays( asignación separada de la declaración )
let cc, ba;
[cc, ba="Merida"] = ["Caceres","Badajoz"];
console.log(cc, ba); // caceres y badajoz en vez de merida por que he asignado despues la segunda posicion que es Badajoz

// ************************************************************************** */
// 3.- Desestructuración  de objetos( asignación basica ): extraemos las propiedades del objeto para sacar los valores
const persona = {
    nombre: 'Juan',
    edad: 27
}
const { nombre, edad } = persona // aqui se crean las variables nombre y edad. Su valor corresponde al valor de los atributos de mismo nombre dentro del objeto persona
// console.log(nombre) // 'Juan'
// console.log(edad) // 27
// De esta forma podemos hacer nuestro código más legible al crear variables que contengan el valor del atributo de un objeto.

// otro ejemplo sacando el nombre de las propiedades 
const varios = { p:11, q: true, r: 'Hola'};
const {p, r} = varios;
console.log(p); // 11
//console.log(q); // undefined porque no la hemos extraido "const{p,q,r}= varios;" de esta forma si
console.log(r); // 'Hola

// *************************************************************************** */
// 4.- Desestructuración de objetos( asignando nuevos nombres a las variables)
const objeto = { nombre: 'Javi', apellido: 'Saez'};
// Tomamos del objeto la propiedad llamada nombre y la asignamos a la variable n
const { nombre: n, apellido: a } = objeto;
console.log('Hola ' +  n + ' ' + a );

// 5.- Desestructuración de objetos ( asignación sin declaración);
let x,y;
({x,y} = {z: 1, y: 2}); // Es obligatorio el parentesis en este tipo de asignación
console.log(x);
console.log(y);



