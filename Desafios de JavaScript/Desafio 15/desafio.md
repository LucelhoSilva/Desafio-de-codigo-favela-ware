## 📝 Desafio 15: Conversão de Minutos para Horas e Minutos

## Descrição

Neste desafio, você vai declarar uma variável para armazenar um valor em minutos e, em seguida, converter esse valor para horas e minutos. Este exercício é útil para aprender a usar operações matemáticas básicas em JavaScript.

## Requisitos

- Declare uma variável chamada `totalMinutos` e atribua a ela o valor `125`.
- Declare duas variáveis chamadas `horas` e `minutos` e atribua a elas os valores correspondentes em horas e minutos.
- Exiba os valores de `horas` e `minutos` no console.

## Desafio Adicional

- Modifique a variável `totalMinutos` para conter um novo valor.
- Atualize as variáveis `horas` e `minutos` para refletir o novo valor convertido de `totalMinutos`.
- Exiba os novos valores de `horas` e `minutos` no console.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
// Valor inicial em minutos
let totalMinutos = 125

// Conversão para horas e minutos
let horas = Math.floor(totalMinutos / 60)
let minutos = totalMinutos % 60

console.log("Horas: " + horas + ", Minutos: " + minutos)

// Desafio Adicional

// Novo valor em minutos
totalMinutos = 200

// Atualização da conversão para horas e minutos
horas = Math.floor(totalMinutos / 60)
minutos = totalMinutos % 60

console.log("Novo valor - Horas: " + horas + ", Minutos: " + minutos)
```

#### Explicação

- Declaramos uma variável `totalMinutos` e atribuímos a ela o valor `125`.
- Usamos `Math.floor` para calcular o número de horas inteiras em `totalMinutos` dividindo por 60.
- Usamos o operador de módulo `%` para calcular o número de minutos restantes.
- Utilizamos `console.log` para exibir os valores de `horas` e `minutos` no console.
- Modificamos a variável `totalMinutos` para um novo valor `200`.
- Atualizamos as variáveis `horas` e `minutos` para refletir o novo valor convertido.
- Utilizamos `console.log` para exibir os novos valores de `horas` e `minutos` no console.

</details>

<br>

Boa sorte! 🚀
