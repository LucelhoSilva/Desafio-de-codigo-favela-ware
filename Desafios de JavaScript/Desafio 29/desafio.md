```text
29. Desafio: Crie um contador simples que inicie em 0 e aumente de 1 em 1 a cada segundo, exibindo o valor atualizado em um elemento HTML.

Dica: Use `setInterval` para atualizar o contador a cada segundo e alterar o conteúdo de um elemento HTML.

Valor: 8 pontos

```

```text

1. **Importação do módulo readline**: No início do código, estamos importando o módulo `readline` do Node.js. Esse módulo nos permite ler entradas do usuário de forma assíncrona, ou seja, sem bloquear o programa enquanto esperamos pela entrada.

2. **Configuração do readline**: Depois, configuramos o `readline` para ler do `process.stdin` (entrada padrão do terminal) e escrever para `process.stdout` (saída padrão do terminal). Essa configuração é armazenada na variável `input`.

3. **Função principal assíncrona `main()`**: Esta é a função principal que será executada. É marcada com `async` porque faz uso de operações assíncronas, como a leitura de entrada do usuário.

4. **Loop `do-while`**: Dentro da função `main()`, há um loop `do-while`. Esse tipo de loop executa primeiro o bloco de código e depois verifica a condição. Aqui, o loop continua enquanto a variável `op` for diferente de `0`.

5. **Promessa para leitura de entrada**: Dentro do loop, a variável `op` é definida usando `await new Promise(...)`. Isso cria uma promessa que resolve quando o usuário insere uma resposta através da função `input.question()`.

6. **Switch-case para opções**: Depois que o usuário insere um número, o código usa um `switch-case` para determinar qual mensagem exibir com base no valor de `op`:

   - `case 1`, `case 2`, `case 3`: Cada caso representa uma opção numérica que o usuário pode escolher. Se o usuário insere `1`, `2` ou `3`, o programa imprime uma mensagem indicando qual opção foi selecionada.
   
   - `case 0`: Quando o usuário insere `0`, uma mensagem especial é mostrada indicando que o menu está saindo.

   - `default`: Se o usuário insere um número que não corresponde a nenhum dos casos anteriores, o programa exibe uma mensagem de erro.

7. **Fechamento da entrada**: Após o loop `do-while`, o código fecha a interface `input` usando `input.close()`, o que libera os recursos de entrada do terminal.

```
