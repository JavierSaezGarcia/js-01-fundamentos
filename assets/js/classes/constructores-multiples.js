// JAVASCRIPT NO SOPORTA MULTIPLES CONSTRUCTORES POR TANTO 
// SOBRECARGA DE CONSTRUCTORES
class Persona {
    // Creamos un metodo estatico que haga una sobreescritura entre comillas del constructor
    // pero que acepte un objeto como el objeto 'javi'
    static porObjeto( { nombre, apellido, pais }){
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    // Esto daria un error: Uncaught SyntaxError: A class may only have one constructor 
    // Por eso el truco es hacer un metodo que acepte objetos pero con las propiuedades del constructor
    // constructor( genero ){
    //     this.genero = genero;
       
    // }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }

}

const nombre1 = 'Aleth',
      apellido1 = 'Doblas',
      pais1 = 'Catalonia';

const javiObjeto = {
    nombre: 'Javier',
    apellido: 'Saez',
    pais: 'PuertoIndependiente'
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
// const persona2 = new Persona(javi.nombre, javi.apellido, javi.pais); // Esto daria error
const persona2 = Persona.porObjeto(javiObjeto);

persona1.getInfo();
persona2.getInfo();