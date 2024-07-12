## 📝 Desafio 17: Soma de Números com While

## Descrição

Neste desafio, você vai criar um programa que calcula a soma de todos os números de 1 a 100 utilizando a estrutura de repetição `while`. Este exercício é útil para aprender a usar estruturas de repetição em JavaScript.

## Requisitos

- Declare uma variável para armazenar a soma e inicialize-a com 0.
- Use a estrutura de repetição `while` para somar todos os números de 1 a 100.
- Exiba o resultado no console.

## Desafio Adicional

- Modifique o programa para que o usuário possa fornecer o valor máximo até onde a soma deve ser calculada (por exemplo, até 50, 200, etc.).
- Exiba o novo resultado no console.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
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
```

#### Explicação

- Declaramos uma variável `soma` e a inicializamos com 0.
- Declaramos uma variável `numero` e a inicializamos com 1.
- Utilizamos a estrutura de repetição `while` para somar todos os números de 1 a 100.
- Utilizamos `console.log` para exibir o resultado no console.
- No desafio adicional, usamos `readline-sync` para solicitar ao usuário que forneça o valor máximo.
- Reinicializamos as variáveis `soma` e `numero`.
- Utilizamos a estrutura de repetição `while` para somar todos os números de 1 até o valor máximo fornecido pelo usuário.
- Utilizamos `console.log` para exibir o novo resultado no console.

</details>

<br>

Boa sorte! 🚀
