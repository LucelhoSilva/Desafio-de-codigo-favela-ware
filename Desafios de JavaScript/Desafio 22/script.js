const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  let op;
  do {
    op = await new Promise((resolve) => {
      input.question("Insira sua opção: ", (resposta) => {
        resolve(parseInt(resposta));
      });
    });

    switch (op) {
      case 1:
        console.log("Entrou na opção 1!");
        break;
      case 2:
        console.log("Entrou na opção 2!");
        break;
      case 3:
        console.log("Entrou na opção 3!");
        break;
      case 0:
        console.log("Saindo do menu!");
        break;
      default:
        console.log("Opção inserida não encontrada!");
        break;
    }

  } while (op !== 0);

  input.close();
}

main();
