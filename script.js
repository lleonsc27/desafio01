// Impressão inicial
alert("Olá!\n\nEste é um Desafio da aula 01 do curso de JavaScript da CoderHouse.\n\nAperte em OK para prosseguir.")

// Declaração de variáveis 'const' e 'let'
const minhaIdade = 21
let nome = prompt("Por favor, digite o seu nome:")
let sobrenome = prompt("Agora, digite o seu sobrenome:")
let idade = prompt("Por fim, digite sua idade:")
let idadeConvertida = parseInt(idade)

// Cálculo da diferença das idades
let diferencaIdade = Math.abs(idadeConvertida-minhaIdade)

// Impressão final com dados coletados e cálculo
alert("Obrigado pelas informações, " + nome + " " + sobrenome + "!\n\nDescobri que temos uma diferença de idade de " + diferencaIdade + " anos.")