var palavras = ["banana", "abacaxi", "morango", "melancia", "pêssego", "uva"];

function filtrarStringsComMaisDe5Caracteres(copo) {
    var resultado = [];
    for (var i = 0; i < copo.length; i++) {
        if (copo[i].length > 5) {
            resultado.push(copo[i]);
        }
    }
    return resultado;
}

var palavrasFiltradas = filtrarStringsComMaisDe5Caracteres(palavras);

console.log("Palavras com mais de 5 caracteres:", palavrasFiltradas);
