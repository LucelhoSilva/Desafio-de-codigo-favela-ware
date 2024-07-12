// Primeiro, instale a biblioteca readline-sync usando o comando:
// npm install readline-sync
const readlineSync = require("readline-sync")

// Solicita ao usuário que forneça um número
let numero = parseInt(readlineSync.question("Digite um numero para ver sua tabuada: "))

// Exibe a tabuada de 1 a 10
console.log("Tabuada de " + numero + ":")
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i)
}

// Desafio Adicional

// Solicita ao usuário que forneça até qual número a tabuada deve ser exibida
let limite = parseInt(readlineSync.question("Ate qual numero voce quer ver a tabuada? "))

// Exibe a tabuada até o número fornecido
console.log("Tabuada de " + numero + " ate " + limite + ":")
for (let i = 1; i <= limite; i++) {
  console.log(numero + " x " + i + " = " + numero * i)
}