var contador = 0;
var elementoContador = document.getElementById('contador');

setInterval(function() {
    contador++;
    elementoContador.textContent = contador;
}, 1000);