const exportacao = {
  paisDestino: "Estados Unidos",
  produto: {
    nome: "aço",
    valorEmDolares: 100000,
    taxaImposta: 0.25
  },
  empresa: "Siderúrgica Brasil Ltda"
};

const {
  produto: {nome, valorEmDolares, taxaImposta},
  empresa
} = exportacao;

const valorComTarifa = valorEmDolares * (1 + taxaImposta);

console.log(`Produto: ${nome}
Empresa: ${empresa}
Valor original: US$ ${valorEmDolares}
Taxa: ${taxaImposta * 100}%
Valor com tarifa: US$ ${valorComTarifa}`);
