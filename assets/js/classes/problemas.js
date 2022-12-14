
const javier = {
    nombre: 'Javier',
    edad: 59,
    imprimir() {
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }
}
const luis = {
    nombre: 'Luis',
    edad: 15
}

javier.imprimir();

class Persona {
    constructor(nombre, edad) {
        console.log('Lo que sea Persona');
        this.nombre = nombre;
        this.edad = edad;
        this.imprimir = function () {
            console.log(`Nombre: ${nombre} Edad: ${edad}`);
        };
    }
}
const maria = new Persona('Maria', 32);
const melissa = new Persona('Melissa', 39);
maria.imprimir();
melissa.imprimir();