// Função para verificar se um número é par ou ímpar
function verificarParidade(numero) {
  return numero % 2 === 0
}

// Função para verificar a paridade de uma lista de números
function verificarListaParidade(lista) {
  return lista.map(verificarParidade)
}

// Exemplo de uso
let numeros = [10, 15, 22, 33, 42]
let resultado = verificarListaParidade(numeros)

console.log("Resultado da verificação de paridade:", resultado)

// Desafio Adicional

// Função modificada para retornar "par" ou "ímpar"
function verificarListaParidadeComTexto(lista) {
  return lista.map((numero) => (verificarParidade(numero) ? "par" : "ímpar"))
}

let resultadoComTexto = verificarListaParidadeComTexto(numeros)

console.log("Resultado da verificação de paridade com texto:", resultadoComTexto)