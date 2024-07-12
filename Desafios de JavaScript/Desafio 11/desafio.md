## 📝 Desafio 11: Identificação do Tipo de Dado

## Descrição

Neste desafio, você vai declarar uma variável para armazenar um valor numérico e, em seguida, identificar o tipo de dado dessa variável. Este exercício é útil para aprender a usar a função `typeof` em JavaScript.

## Requisitos

- Declare uma variável chamada `idade` e atribua a ela um valor numérico de sua escolha.
- Declare uma variável chamada `tipo` e atribua a ela o tipo de dado da variável `idade`.
- Exiba o valor de `tipo` no console.

## Desafio Adicional

- Modifique o valor da variável `idade` para um valor de um tipo de dado diferente (por exemplo, uma string ou um booleano).
- Atualize a variável `tipo` para refletir o novo tipo de dado de `idade`.
- Exiba o novo valor de `tipo` no console.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
let idade = 25

let tipo = typeof idade

console.log("O tipo de dado de idade é: " + tipo)

// Desafio Adicional

idade = "vinte e cinco"

tipo = typeof idade

console.log("O novo tipo de dado de idade é: " + tipo)
```

#### Explicação

- Declaramos uma variável `idade` e atribuímos a ela o valor `25`.
- Declaramos uma variável `tipo` e usamos a função `typeof` para determinar o tipo de dado da variável `idade`.
- Utilizamos `console.log` para exibir o valor de `tipo` no console.
- Modificamos o valor da variável `idade` para uma string `"vinte e cinco"`.
- Atualizamos a variável `tipo` para refletir o novo tipo de dado da variável `idade`.
- Utilizamos `console.log` para exibir o novo valor de `tipo` no console.

</details>

## Dicas

- Use a função `typeof` para determinar o tipo de dado de uma variável.
- Lembre-se de que você pode usar `console.log` para exibir valores no console.

Boa sorte! 🚀
