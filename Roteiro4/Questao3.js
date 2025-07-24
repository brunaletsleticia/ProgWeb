const usuarios = [
    {nome:"Cleciana", idade:"25", ativo:"true", saldo: "1234.56"},
    {nome:"Gustavo", idade:30, ativo:true, saldo: 980},
    {nome:"Rayane", idade:null, ativo:"false", saldo: "1500.90"},
    {nome:"Igor", idade:"Nan", ativo:1, saldo: undefined},
    {nome:"Samuel", idade:"22 anos", ativo:false, saldo: "0"}
]

const normalizarUsuario = (usuario) => {
  let idadeConvertida = parseInt(usuario.idade);
  let idade;
  if (isNaN(idadeConvertida)) {
    idade = null;
  } else {
    idade = idadeConvertida;
  }

  let ativo;
  if (usuario.ativo === "true" || usuario.ativo === 1 || usuario.ativo === true) {
    ativo = true;
  } else {
    ativo = false;
  }

  let saldoConvertido = parseFloat(usuario.saldo);
  let saldo;
  if (isNaN(saldoConvertido)) {
    saldo = 0.00;
  } else {
    saldo = parseFloat(saldoConvertido.toFixed(2));
  }

  return {
    nome: usuario.nome,
    idade: idade,
    ativo: ativo,
    saldo: saldo
  };
};

const processarUsuario = (lista) => {
  const usuariosNormalizados = lista.map(normalizarUsuario);
  console.log(usuariosNormalizados);
};

processarUsuario(usuarios);

