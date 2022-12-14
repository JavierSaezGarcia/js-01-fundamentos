

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

class Heroe extends Persona {
    clan = 'Sin Clan';
    // Si ponemos la palabra reservada constructor nos obliga a llamar al constructor del padre de la que hereda
    // para ello usamos en vez de this usamos super();
    constructor(nombre, codigo, frase) {
        // AUNQUE PODEMOS INICIALIZAR VARIABLES
        let a = 2;
        let nom = 'Juan';
        // SIEMPRE SE ANTEPONE EL CONSTRUCTOR DEL PADRE... 
        super(nombre, codigo, frase);
        // ...Y DESPUES LAS DE LOS HIJOS QUE VAYAN CON THIS, NUNCA AL REVES
        this.clan = 'Los Vengadores';
    }
    // TAMBIEN PODEMOS CREAR METODOS IGUALES A LOS DEL PADRE sobreescribirendolos
    quienSoy() {
        console.log(`Soy ${this.codigo} y mi grupo son ${this.clan}`);
        // Pero si queremos llamar a los del padre seria con super.seguido del metodo:
        super.quienSoy();

    }
}
// const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');

// const spiderman = new Heroe;


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu arácnido y amigable vecino');
console.log(spiderman);
spiderman.quienSoy();

