// Inicializa a variável para armazenar a soma
let soma = 0

// Inicializa a variável de controle
let numero = 1

// Usa a estrutura de repetição while para somar todos os números de 1 a 100
while (numero <= 100) {
  soma += numero
  numero++
}

console.log("A soma de todos os números de 1 a 100 é: " + soma)

// Desafio Adicional

const readlineSync = require("readline-sync")

// Solicita ao usuário que forneça o valor máximo
let maximo = parseInt(readlineSync.question("Digite o valor máximo para calcular a soma: "))

// Reinicializa as variáveis
soma = 0
numero = 1

// Usa a estrutura de repetição while para somar todos os números de 1 até o valor máximo fornecido pelo usuário
while (numero <= maximo) {
  soma += numero
  numero++
}

console.log("A soma de todos os números de 1 a " + maximo + " é: " + soma)