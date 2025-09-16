const botaoPrincipal = document.getElementById('botao-principal');
const textoOutput = document.getElementById('output-texto');

function alternarVisibilidade() {
    textoOutput.classList.toggle('hidden');
}

botaoPrincipal.addEventListener('click',alternarVisibilidade);