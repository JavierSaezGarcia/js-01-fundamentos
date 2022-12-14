document.write('<h3> CICLO FOR </h3>');

const heroes = ['Batman', 'Superman', 'Wonderwoman', 'Aquaman'];

console.warn('For tradicional');

for( let i = 0; i < heroes.length; i++ ){ 
    console.log(heroes[i]);
}
//
console.warn('Nueva forma: For in');
for (let index in heroes) {
    console.log(heroes[index]);
}

console.warn('La mejor forma: For of');
for( let heroe of heroes ){
    console.log(heroe);
}