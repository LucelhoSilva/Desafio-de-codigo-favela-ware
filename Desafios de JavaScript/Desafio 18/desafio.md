Claro! Vamos criar um novo desafio para exibir todos os nomes de uma lista utilizando a estrutura de repetição `for...of`.

## 📝 Desafio 18: Exibição de Nomes com For...of

## Descrição

Neste desafio, você vai criar um programa que exibe todos os nomes de uma lista utilizando a estrutura de repetição `for...of`. Este exercício é útil para aprender a iterar sobre arrays em JavaScript.

## Requisitos

- Declare uma lista de nomes.
- Use a estrutura de repetição `for...of` para iterar sobre a lista e exibir cada nome.
- Exiba os nomes no console.

## Desafio Adicional

- Modifique o programa para que o usuário possa adicionar novos nomes à lista antes de exibi-los.
- Exiba a lista atualizada no console.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
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
  let novoNome = readlineSync.question("Digite um nome para adicionar à lista (ou pressione Enter para finalizar): ")
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
```

#### Explicação

- Declaramos uma lista de nomes.
- Utilizamos a estrutura de repetição `for...of` para iterar sobre a lista e exibir cada nome.
- Utilizamos `console.log` para exibir os nomes no console.
- No desafio adicional, usamos `readline-sync` para solicitar ao usuário que adicione novos nomes à lista.
- Utilizamos um loop `while` para permitir que o usuário adicione vários nomes até decidir parar.
- Utilizamos a estrutura de repetição `for...of` para exibir a lista atualizada de nomes.

</details>

<br>

Boa sorte! 🚀
