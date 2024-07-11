function toggleVisibility() {
    var texto = document.getElementById('texto');
    var botao = document.querySelector('button');

    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        botao.textContent = 'Esconder';
    } else {
        texto.style.display = 'none';
        botao.textContent = 'Mostrar';
    }
}

