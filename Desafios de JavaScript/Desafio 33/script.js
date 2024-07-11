function encontrarMaiorNumero(array) {
    var maior = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

var numeros = [15, 7, 3, 9, 12];
var maiorNumero = encontrarMaiorNumero(numeros);
console.log("O maior número é:", maiorNumero);
