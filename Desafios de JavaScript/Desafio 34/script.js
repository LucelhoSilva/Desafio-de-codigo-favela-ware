function filtrarNumerosPares(array) {
    var numerosPares = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i]);
        }
    }
    return numerosPares;
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = filtrarNumerosPares(numeros);
console.log("Números pares:", numerosPares);