const clientes =[
{nome: "Davi", email:"davi@email.com", plano: "Premium", ativo:true},
{nome: "Mariana", email:"mariana@email.com", plano: "Básico", ativo:false},
{nome: "Gabriel", email:"gabriel@email.com", plano: "Padrão", ativo:true},
{nome: "Ana", email:"ana@email.com", plano: "Premium", ativo:false},
{nome: "Huandrey", email:"huandrey@email.com", plano: "Padrão", ativo:true}
]


const gerarEmail = (cliente) => {
  return cliente.ativo
    ? `Para: ${cliente.email}
Olá, ${cliente.nome}!
Obrigado por ser um assinante do nosso plano ${cliente.plano}! Estamos felizes em tê-lo conosco.

Caso precise de suporte, estamos à disposição.

Atenciosamente,
Equipe StreamingWeb.`
    : `Para: ${cliente.email}
Olá, ${cliente.nome}!
Notamos que sua assinatura do plano ${cliente.plano} está inativa. Que tal voltar e aproveitar nossos conteúdos exclusivos?
Reative agora e continue sua experiência conosco!

Atenciosamente,
Equipe StreamingWeb.`;
};

clientes.forEach(cliente => {
  console.log(gerarEmail(cliente));
  console.log("\n----\n");
});