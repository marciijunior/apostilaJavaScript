const botoesAbas = document.querySelectorAll('.aba-link');
const conteudosAbas = document.querySelectorAll('.aba-conteudo');

function aoClicarNaAba(event) {
    const botaoClicado = event.currentTarget;
    const idConteudoClicado = botaoClicado.dataset.aba;

    for (let i = 0; i < conteudosAbas.length; i++) {
        conteudosAbas[i].classList.remove('active');
    }
    for (let i = 0; i < botoesAbas.length; i++) {
        botoesAbas[i].classList.remove('active');
    }

    const conteudoAlvo = document.getElementById(idConteudoClicado);

    ativarAba(botaoClicado, conteudoAlvo);
}

function ativarAba(botao, conteudo) {
    conteudo.classList.add('active');
    botao.classList.add('active');
}

botoesAbas.forEach(botao => {
    botao.addEventListener('click', aoClicarNaAba);
});