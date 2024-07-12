## 📝 Desafio 7: Troca de Valores

## Descrição

Neste desafio, você vai declarar duas variáveis e trocar seus valores sem usar variáveis adicionais para armazenar temporariamente um dos valores. Esse exercício é útil para aprender a manipular valores em variáveis.

## Requisitos

- Declarar duas variáveis chamadas `x` e `y`.
- Atribuir à variável `x` o valor `3`.
- Atribuir à variável `y` o valor `8`.
- Troque os valores das variáveis `x` e `y` sem declarar novas variáveis.
- Exibir os valores de `x` e `y` no console para confirmar a troca.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
let x = 3
let y = 8

// Troca dos valores
x = x + y
y = x - y
x = x - y

console.log("O valor de x é: " + x)
console.log("O valor de y é: " + y)
```

</details>

## Explicação

- Declaramos duas variáveis `x` e `y` e atribuímos os valores `3` e `8`, respectivamente.
- Usamos uma técnica matemática para trocar os valores sem usar uma variável temporária:
  - Primeiro, somamos os valores de `x` e `y` e atribuímos a `x`.
  - Em seguida, subtraímos o novo valor de `x` pelo valor de `y` para obter o valor original de `x` em `y`.
  - Finalmente, subtraímos o novo valor de `y` do novo valor de `x` para obter o valor original de `y` em `x`.
- Utilizamos `console.log` para exibir os valores de `x` e `y` após a troca.
