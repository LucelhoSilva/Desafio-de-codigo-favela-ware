## 📝 Desafio 16: Tabuada de um Número

## Descrição

Neste desafio, você vai criar um programa que exibe a tabuada de um número fornecido pelo usuário utilizando a estrutura de repetição `for`.

## Requisitos

- Solicite ao usuário que forneça um número.
- Use a estrutura de repetição `for` para calcular e exibir a tabuada desse número de 1 a 10.
- Exiba os resultados no console.

## Desafio Adicional

- Modifique o programa para que o usuário possa escolher até qual número a tabuada deve ser exibida (por exemplo, até 12, 15, etc.).
- Exiba os novos resultados no console.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
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
```

#### Explicação

- Primeiro, instale a biblioteca `readline-sync` usando o comando `npm install readline-sync`.
- Usamos `readlineSync.question` para solicitar ao usuário que forneça um número.
- Utilizamos a estrutura de repetição `for` para calcular e exibir a tabuada desse número de 1 a 10.
- Utilizamos `console.log` para exibir os resultados no console.
- No desafio adicional, solicitamos ao usuário que forneça até qual número a tabuada deve ser exibida.
- Utilizamos a estrutura de repetição `for` para calcular e exibir a tabuada até o número fornecido pelo usuário.

</details>

<br>

Boa sorte! 🚀
