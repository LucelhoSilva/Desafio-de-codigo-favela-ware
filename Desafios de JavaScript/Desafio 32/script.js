function calcularSoma(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

var numeros = [2, 4, 6, 8, 10];
var resultado = calcularSoma(numeros);
console.log("A soma dos elementos é:", resultado);
