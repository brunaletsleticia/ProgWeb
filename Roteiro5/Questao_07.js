/**
 * Parte 1:
 *  curl -k -X GET https://demo6305308.mockable.io/produtos
[
  { "id": 1, "nome": "Notebook X", "preco": 3500.00 },
  { "id": 2, "nome": "Mouse Gamer", "preco": 150.00},
  { "id": 3, "nome": "Teclado Mecânico", "preco": 500.00 }
]
    * Parte 2:
  * curl -k -X POST https://demo6305308.mockable.io/produtos
{
  "id": 4,
  "nome": "Produto",
  "preco": 100.45,
  "status": "criado"
}
 */

// criei uma conta temporaria que expira depois de 24h
const API_BASE = "https://demo6305308.mockable.io";

// buscar a lista de produtos -- GET
async function buscarProdutos() {
  try {
    // az a requisição GET para o endpoint de produtos
    const response = await fetch(`${API_BASE}/produtos`);

    // verifica se a resposta foi bem-sucedida (status HTTP 200–299)
    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos: ${response.status}`);
    }

    // converte a resposta para JSON
    const produtos = await response.json();

    // exibe cada produto
    produtos.forEach(p => {
      console.log(`Produto: ${p.nome} | Preço: ${p.preco.toFixed(2)}`);
    });

    // retorna a lista
    return produtos;
  } catch (erro) {
    console.error("Falha ao buscar produtos:", erro.message);
    return [];
  }
}

// cadastrar um novo produto -- POST
async function cadastrarProduto(produto) {
  try {
    // faz a requisição POST 
    const response = await fetch(`${API_BASE}/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // converte o obj JS para JSON
      body: JSON.stringify(produto)
    });

    // verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ao cadastrar produto: ${response.status}`);
    }

    // converte a resposta para JSON
    const resultado = { ...produto, status: "criado" };
    console.log(`Produto "${resultado.nome}" criado com sucesso! Status: ${resultado.status}`);

  } catch (erro) {
    console.error("Falha ao cadastrar produto:", erro.message);
  }
}


async function main() {

  // buscar produtos 
  const listaProdutos = await buscarProdutos();

  // criar um novo produto 
  const novoProduto = {
    id: listaProdutos.length + 1, 
    nome: "Headset",             
    preco: 400.00,
    quantidade: 3
  };

  // enviar o novo produto via POST
  await cadastrarProduto(novoProduto);
}

main();
/*
Respostas :
~/pweb/ProgWeb/Roteiro5$ NODE_TLS_REJECT_UNAUTHORIZED=0 node q07.js
(node:20860) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
(Use `node --trace-warnings ...` to show where the warning was created)
Produto: Notebook X | Preço: 3500.00
Produto: Mouse Gamer | Preço: 150.00
Produto: Teclado Mecânico | Preço: 500.00

Produto "Headset" criado com sucesso! Status: criado
*/