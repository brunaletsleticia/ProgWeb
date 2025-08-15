const colocarTodasLetrasEmMaiusculoEm500ms = (texto) =>
    new Promise((resolve, reject) => {
        if (typeof texto !== "string") {
            reject("Parâmetro deve ser uma string");
        } else {
            setTimeout(() => resolve(texto.toUpperCase()), 500);
        }
    });

const inverteTodasLetras = (texto) => texto.split("").reverse().join("");

const processarTexto = async (texto) => {
    try {
        const txtMaiusculo = await colocarTodasLetrasEmMaiusculoEm500ms(texto);
        const txtInvertido = inverteTodasLetras(txtMaiusculo);
        console.log(txtInvertido);
    } catch (erro) {
        console.error(erro); 
    }
};

processarTexto("código em javaScript");
