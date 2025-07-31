
// const obj = { a: 1, b: 2, c: "demetrio", soma() { return a + b + c } }
// //transformar o objeto para JSON (formato de dados)
// console.log(JSON.stringify(obj))
 
//tranformar de um JSON para objeto
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
//console.log(JSON.parse('{ "a": 1, "b": "2", "c": "3" }'))
//aspas duplas para valores do tipo string
// console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": "u", "d": {}, "e": [] }')) //válido

const jsonVendas = `[
{"produto": "Notebook", "valor": 4500},
{"produto": "Smartphone", "valor": 2500},
{"produto": "Tablet", "valor": 1800},
{"produto": "Monitor", "valor": 1200}
]`;

const filtrarVendas = (jsonVendas, minimo) => {
    const json = JSON.parse(jsonVendas);
    const vendas = json.filter(item => item.valor > minimo);
    const totalVendas = vendas.length;
    return { totalVendas, vendas };
};
console.log(filtrarVendas(jsonVendas, 2000));