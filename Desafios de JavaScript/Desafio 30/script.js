function verificarAdivinhacao() {
    var numeroDigitado = parseInt(document.getElementById('numero').value);
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
    
    if (numeroDigitado === numeroAleatorio) {
        document.getElementById('resultado').textContent = 'Parabéns! Você acertou!';
    } else {
        document.getElementById('resultado').textContent = 'Que pena! Tente novamente.';
    }
}