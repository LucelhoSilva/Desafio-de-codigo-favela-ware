## 📝 Desafio 13: Conversão de String para Número

## Descrição

Neste desafio, você vai declarar uma variável para armazenar uma string que representa um número e, em seguida, converter essa string para um valor numérico. Este exercício é útil para aprender a usar funções de conversão em JavaScript.

## Requisitos

- Declare uma variável chamada `numStr` e atribua a ela a string `"123"`.
- Declare uma variável chamada `num` e atribua a ela o valor convertido de `numStr` para número.
- Exiba o valor de `num` no console.

## Desafio Adicional

- Modifique a variável `numStr` para conter uma nova string que representa um número decimal (por exemplo, `"123.45"`).
- Atualize a variável `num` para refletir o novo valor convertido de `numStr` para número.
- Exiba o novo valor de `num` no console.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
let numStr = "123"

let num = Number(numStr)

console.log("O valor convertido de numStr é: " + num)

// Desafio Adicional

numStr = "123.45"

num = parseFloat(numStr)

console.log("O novo valor convertido de numStr é: " + num)
```

#### Explicação

- Declaramos uma variável `numStr` e atribuímos a ela a string `"123"`.
- Declaramos uma variável `num` e usamos a função `Number` para converter a string `numStr` para um número.
- Utilizamos `console.log` para exibir o valor de `num` no console.
- Modificamos a variável `numStr` para uma nova string `"123.45"`.
- Atualizamos a variável `num` para refletir o novo valor convertido de `numStr` para número usando a função `parseFloat`.
- Utilizamos `console.log` para exibir o novo valor de `num` no console.

</details>

## Dicas

- Use a função `parseInt` para converter uma string para um número inteiro.
- Use a função `parseFloat` ou `Number` para converter uma string para um número decimal.
- Lembre-se de que você pode usar `console.log` para exibir valores no console.

Boa sorte! 🚀
