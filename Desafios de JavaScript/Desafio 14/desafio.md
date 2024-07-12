## 📝 Desafio 14: Verificação de Número Par ou Ímpar

## Descrição

Neste desafio, você vai declarar uma variável para armazenar um número e, em seguida, verificar se esse número é par ou ímpar. Este exercício é útil para aprender a usar operadores de módulo e estruturas de controle em JavaScript.

## Requisitos

- Declare uma variável chamada `numero` e atribua a ela um valor qualquer.
- Declare uma variável chamada `ePar` e atribua a ela `true` se `numero` for par e `false` se for ímpar.
- Exiba o valor de `ePar` no console.

## Desafio Adicional

- Modifique a função `verificarListaParidade` para retornar uma lista de strings, onde cada string indica se o número é "par" ou "ímpar".
- Exiba o novo resultado no console.

## Requisitos

- Crie uma função chamada `verificarParidade` que aceita um número e retorna `true` se o número for par e `false` se for ímpar.
- Crie uma função chamada `verificarListaParidade` que aceita uma lista de números e retorna uma nova lista com `true` ou `false` para cada número, indicando se é par ou ímpar.
- Exiba o resultado no console.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
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
```

#### Explicação

- Criamos a função `verificarParidade` que aceita um número e retorna `true` se for par e `false` se for ímpar.
- Criamos a função `verificarListaParidade` que aceita uma lista de números e usa `map` para aplicar a função `verificarParidade` a cada número, retornando uma nova lista de `true` ou `false`.
- Utilizamos `console.log` para exibir o resultado no console.
- Modificamos a função `verificarListaParidade` para retornar "par" ou "ímpar" em vez de `true` ou `false`.
- Utilizamos `console.log` para exibir o novo resultado no console.

</details>

<br>

Boa sorte! 🚀
