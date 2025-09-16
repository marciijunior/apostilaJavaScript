const botaoPrincipal = getElementById('botao-principal');
const esconderFrase = getElementById('output-texto');

function aoClicarNoBtn(evento) {
    if (esconderFrase.classList.contains('hidden')) {
        esconderFrase.classList.remove('hidden');
    } else {
        esconderFrase.classList.add('hidden');
    }
}

botaoPrincipal.addEventListener('click', botaoPrincipal);