let clientesJSON = `[
{"nome": "Lucas", "idade": 30, "email": "lucas@email.com"},
{"nome": "Mariana", "idade": 25, "email": "mariana@email.com"}
]`;
const adicionarCliente = (json, nome, idade, email) => {
  const clientes = JSON.parse(json);
  clientes.push({ nome, idade, email });
  return JSON.stringify(clientes);
};

const buscarCliente = (json, nome) => {
  const clientes = JSON.parse(json);
  const achado = clientes.find(cliente => cliente.nome === nome);
    if (achado) {
        return `Cliente encontrado:\nNome: ${achado.nome}\nIdade: ${achado.idade}\nEmail: ${achado.email}`;
    } else {
        return `Cliente não encontrado.`;
    }

};
// Testando...
clientesJSON = adicionarCliente(clientesJSON, "Roberto", 40, "roberto@email.com");
console.log(buscarCliente(clientesJSON, "Mariana"));