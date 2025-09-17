const botaoPrincipal = document.getElementById('botao-principal');
const textoOutput = document.getElementById('output-texto');

function alternarVisibilidade() {
    if (textoOutput.classList.contains('hidden')) {
        textoOutput.classList.remove('hidden');
    } else {
        textoOutput.classList.add('hidden');
    }
}

botaoPrincipal.addEventListener('click', alternarVisibilidade);