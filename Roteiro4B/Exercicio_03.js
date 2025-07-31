const funcionarios = [
{ nome: "Ana", cargo: "Desenvolvedora", salario: 7000 },
{ nome: "Carlos", cargo: "Gerente", salario: 12000 },
{ nome: "Beatriz", cargo: "Analista", salario: 5000 }
];


const gerarRelatorio = (funcionarios) => {
  const titulo = `Relatório de Funcionários\n------------------------------------`;

  const comeco = funcionarios.map(({ nome, cargo, salario }) => {
    return `Nome: ${nome} - Cargo: ${cargo} - Salário: ${formatarSalario(salario)}`;
  }).join("\n");

  const final = `------------------------------------\nTotal de funcionários: ${funcionarios.length}\nSalário médio: ${calcularMediaSalarial(funcionarios)}`;

  return `${titulo}\n${comeco}\n${final}`;
};


const totalFuncionarios = (funcionarios) => funcionarios.length;

const calcularMediaSalarial = (funcionarios) => {
  const totalSalario = funcionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
  const media = totalSalario / funcionarios.length;
  return formatarSalario(media);
};

const formatarSalario = valor => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);


console.log(gerarRelatorio(funcionarios));


