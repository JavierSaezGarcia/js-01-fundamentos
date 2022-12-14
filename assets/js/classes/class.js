

class Persona {
    // con STATIC permite ver las propiedades y metodos sin instanciar nada
    // Es decir que cuando trabajamos con propiedades y metodos estaticos quiere decir que
    // no se esta trabajando con una clase instanciada sino con la estructura de propiedades y metodos estaticos
    // LAS PROPIEDADES Y METODOS ESTATICOS VAN SIEMPRE AL PRINCIPIO DE LA CLASE
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }
    static mensaje() {
        console.log(this.nombre); // undefined porque es estatico y solo tienes el esqueleto
        console.log('Hola a todos soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    _comida = ''; // esta no esta inicializada

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }
    // setters y getters

    // Crear un setter
    set setComidaFavorita(comida) {
        this._comida = comida.toUpperCase();
    }
    //crear un getter
    get getComidaFavorita() {
        // recuperar una propiedad construida
        return `La comida favorita de ${this.nombre} es ${this._comida}`
    }

    // Los metodos son funciones en la instancia de la clase
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
const spidy = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy1 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy2 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy3 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy4 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy5 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy6 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy7 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
const spidy8 = new Persona('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
//const steel = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman el más duro');


// console.log( spidy );
// console.log( steel );

spidy.quienSoy(); // Los parentesis quieren decir que quieren ejecutarlo
//steel.quienSoy();

spidy.miFrase();
// ESTABLECER UN VALOR
spidy.setComidaFavorita = 'Paella';
// console.log( spidy );
spidy.nemesis = 'Duendecillo verde';

// console.log( spidy.getComidaFavorita );
console.log('Conteo static', Persona._conteo);
console.log('Static', Persona.conteo);
Persona.mensaje(); // esto si es un metodo por eso los parentesis

// Se pueden hacer propiedades estaticas fuera de la clase y esto es solo en javascript en otroas lenguajes daria error
Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);


