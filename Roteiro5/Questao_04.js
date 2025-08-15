const combinaArrays = (callback, ...arrays) => 
    callback([...arrays.flat()].sort((a, b) => a - b));

const array1 = [1, 10, 85, 21];
const array2 = [60, 31, 18];

combinaArrays(
    (resultado) => console.log(resultado.join(", ")),
    array1,
    array2
);
