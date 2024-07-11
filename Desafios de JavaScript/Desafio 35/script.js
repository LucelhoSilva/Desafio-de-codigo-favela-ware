function filtrarStringsComMaisDe5Caracteres(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

var palavras = ["banana", "abacaxi", "morango", "melancia", "pêssego", "uva"];
var palavrasFiltradas = filtrarStringsComMaisDe5Caracteres(palavras);
console.log("Palavras com mais de 5 caracteres:", palavrasFiltradas);
