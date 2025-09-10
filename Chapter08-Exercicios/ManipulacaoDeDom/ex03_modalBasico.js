function abrirModal() {
    document.getElementById('modal-container').classList.remove('hidden');
}

function fecharModal() {
    document.getElementById('modal-container').classList.add('hidden');
}

document.getElementById('botao-abrir-modal').addEventListener('click', abrirModal);

document.getElementById('botao-fechar-modal').addEventListener('click', fecharModal);

function fecharAoClicarFora(event) {
    if (event.target === document.getElementById('modal-container')) {
        fecharModal();
    }
}

document.getElementById('modal-container').addEventListener('click', fecharAoClicarFora);