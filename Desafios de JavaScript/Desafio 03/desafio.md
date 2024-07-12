## 📝 Desafio 3: Concatenação de Strings

## Descrição

Neste desafio, você vai declarar duas variáveis e atribuir valores a elas. Depois, vai declarar uma terceira variável e atribuir a ela a concatenação das duas primeiras variáveis com um espaço entre elas. Esse exercício é útil para entender como manipular e combinar strings em JavaScript.

## Requisitos

- Declarar duas variáveis chamadas `primeiroNome` e `ultimoNome` usando a palavra-chave `let` ou `const`.
- Atribuir à variável `primeiroNome` o valor `"Maria"`.
- Atribuir à variável `ultimoNome` o valor `"Silva"`.
- Declarar uma terceira variável chamada `nomeCompleto` e atribuir a ela a concatenação de `primeiroNome` e `ultimoNome` com um espaço entre eles.

## Solução esperada

<details>
    <summary>Resposta</summary>

```javascript
let primeiroNome = "Maria"
let ultimoNome = "Silva"
let nomeCompleto = primeiroNome + " " + ultimoNome
console.log(nomeCompleto) // Maria Silva

// ou

const primeiroNome = "Maria"
const ultimoNome = "Silva"
const nomeCompleto = primeiroNome + " " + ultimoNome
console.log(nomeCompleto) // Maria Silva
```

</details>

## Explicação

- Declaramos duas variáveis `primeiroNome` e `ultimoNome` usando `let` ou `const`.
- Atribuímos o valor `"Maria"` à variável `primeiroNome`.
- Atribuímos o valor `"Silva"` à variável `ultimoNome`.
- Declaramos uma terceira variável `nomeCompleto` e atribuimos a concatenação de `primeiroNome` e `ultimoNome` a ela usando o operador `+` para adicionar um espaço entre os dois nomes.
- Utilizamos `console.log` para exibir o valor do nomeCompleto no console.
