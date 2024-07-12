// Declara uma lista de nomes
let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"]

// Usa a estrutura de repetição for...of para iterar sobre a lista e exibir cada nome
console.log("Lista de nomes:")
for (let nome of nomes) {
  console.log(nome)
}

// Desafio Adicional

const readlineSync = require("readline-sync")

// Solicita ao usuário que adicione novos nomes à lista
let adicionarMais = true
while (adicionarMais) {
  let novoNome = readlineSync.question("Digite um nome para adicionar a lista (ou pressione Enter para finalizar): ")
  if (novoNome) {
    nomes.push(novoNome)
  } else {
    adicionarMais = false
  }
}

// Exibe a lista atualizada de nomes
console.log("Lista atualizada de nomes:")
for (let nome of nomes) {
  console.log(nome)
}