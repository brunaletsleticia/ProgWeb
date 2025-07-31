// Criptografia de dados
const crypto = require('crypto');

const criptografarMensagem = (texto, chaveSecreta) => {
const algorithm = 'aes-256-cbc';
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
let encrypted = cipher.update(texto, 'utf8', 'hex');
encrypted += cipher.final('hex');
// Retorna o IV junto com o texto criptografado
return `${iv.toString('hex')}:${encrypted}`;
}

// Função para descriptografar dados
const decritografar = (textoCriptografado, chaveSecreta) => {
const algorithm = 'aes-256-cbc';
const [ivHex, encrypted] = textoCriptografado.split(':');
const iv = Buffer.from(ivHex, 'hex');
const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
return decrypted;
}

const processarNumeros = (numeros, callbackFunction) => 
  numeros
    .filter((n) => n % 2 === 0) 
    .map((n) => callbackFunction(n.toString())); 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chaveSecreta = crypto.randomBytes(32); 

const numerosCriptografados = processarNumeros(numeros, (n) =>
  criptografarMensagem(n, chaveSecreta)
);

console.log('Números criptografados:', numerosCriptografados);

