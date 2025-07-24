const vendas = [
  { produto: "Notebook", preco: 4500, quantidade: 3, vendedor: "Sara" },
  { produto: "Smartphone", preco: 2300, quantidade: 5, vendedor: "Matheus" },
  { produto: "Monitor", preco: 1200, quantidade: 2, vendedor: "Gabriel" },
  { produto: "Teclado Mecânico", preco: 350, quantidade: 4, vendedor: "Sara" },
  { produto: "Notebook", preco: 4500, quantidade: 6, vendedor: "Gabriel" },
  { produto: "Monitor", preco: 1200, quantidade: 3, vendedor: "Matheus" },
];

const gerarRelatorio = (vendas) => {
  const formatarMoeda = valor => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);

  let relatorio = `Relatório de Vendas:\n\n`;
  let totalGeral = 0;
  const comissoes = {};

  for (const venda of vendas) {
    const { produto, preco, quantidade, vendedor } = venda;
    const total = preco * quantidade;
    totalGeral += total;

    if (!comissoes[vendedor]) {
      comissoes[vendedor] = 0;
    }
    comissoes[vendedor] += total * 0.05;

    relatorio += `- Produto: ${produto}
Quantidade: ${quantidade}
Preço Unitário: ${formatarMoeda(preco)}
Total: ${formatarMoeda(total)}
Vendedor: ${vendedor}

`;
  }

  relatorio += `Total Geral: ${formatarMoeda(totalGeral)}\nTotal de comissão (5%):\n`;

  for (const vendedor in comissoes) {
    relatorio += `${vendedor}: ${formatarMoeda(comissoes[vendedor])}\n`;
  }
  return relatorio;
};

console.log(gerarRelatorio(vendas));