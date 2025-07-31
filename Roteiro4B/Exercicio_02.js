const frases = [
"JavaScript é poderoso!",
"Callbacks são úteis.",
"Arrow functions são mais curtas."
];

const analisarTexto = (array, callback) => {
    return callback(array);
};
// Callback que conta o total de palavras em todas as frases
const contarPalavras = (array) => {
    return array.reduce((total, frase) => {
        const palavras = frase.split(" ");
        return total + palavras.length;
    },0 ); // começa com 0
};
// Callback que encontra a frase com mais palavras
const maiorFrase = (array) => {
  return array.reduce((maior, fraseAtual) => {
    if (fraseAtual.split(" ").length > maior.split(" ").length) {
      return fraseAtual;
    } else {
      return maior;
    }
  }, "");
};
;

// usando for:
// const maiorFrase = (array) => {
//     let maior = "";
//     for (let i = 0; i < array.length; i++) {
//         const palavras = array[i].split(" ").length;
//         if (palavras > maior.split(" ").length) {
//             maior = array[i];
//         }
//     }
//     return maior;
// };


console.log(analisarTexto(frases, contarPalavras));
console.log(analisarTexto(frases, maiorFrase));
