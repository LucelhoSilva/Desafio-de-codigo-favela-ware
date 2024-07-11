const numero1 = 10; 
const numero2 = 5;  
const operacao = 'multiplicacao';

let resultado;

switch (operacao) {
    case 'adicao':
        resultado = numero1 + numero2;
        break;
    case 'subtracao':
        resultado = numero1 - numero2;
        break;
    case 'multiplicacao':
        resultado = numero1 * numero2;
        break;
    case 'divisao':
        resultado = numero1 / numero2;
        break;
    default:
        console.log('Operação inválida.');
        break;
}

if (resultado !== undefined) {
    console.log(`Resultado: ${resultado}`);
}
