
// SINGLETON: | ES UNA INSTANCIA UNICA DE MI CLASE QUE AUNQUE HAGAMOS REPETIDAS INSTANCIAS
//            | SIEMPRE RETORNARÁ LA "MISMA INSTANCIA" ES DECIR SON COMO CLONES DE INSTANCIAS. 
//            | NO IMPORTA CUANTAS VECES HAGAMOS NEW, SIEMPRE RETORNARA LA MISMA INSTANCIA DE MI CLASE

// Como determinamos que es in singleton
class Singleton {
    // estos dos campos son opcionales
    static instancia;
    nombre = '';
    constructor ( nombre = ''){
        if ( !! Singleton.instancia){
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;
        console.log( Singleton.instancia );
    }
}
const instancia1 = new Singleton('Spiderman');
const instancia2 = new Singleton('Ironmanh');
const instancia3 = new Singleton('BlackPanther');



console.log(`Nombre de la instancia1 es ${ instancia1.nombre }`);
console.log(`Nombre de la instancia2 es ${ instancia2.nombre }`);
console.log(`Nombre de la instancia3 es ${ instancia3.nombre }`);