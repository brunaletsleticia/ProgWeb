const colocarTodasLetrasEmMaiusculoEm500ms = async(texto) => 
    new Promise((resolve, reject) => {
        if (typeof texto !== "string") {
            reject("Parâmetro deve ser uma string");
        } else {
            setTimeout(() => resolve(texto.toUpperCase()), 500);
        }
    });

const inverteTodasLetras = (texto) => texto.split("").reverse().join("");

colocarTodasLetrasEmMaiusculoEm500ms("código em javaScript")
    .then(inverteTodasLetras)
    .then(console.log)
