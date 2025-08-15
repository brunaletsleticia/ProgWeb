const temIguais = (...params) => 
    params.some((valor, indice, array) => 
        array.findIndex(item => item === valor) !== indice);

console.log(temIguais(5,2,9,5,1));
console.log(temIguais(5,2,9,'5',1));