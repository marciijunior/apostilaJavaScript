const todasAsPerguntas = document.querySelectorAll('.pergunta-faq');
const todasAsRespostas = document.querySelectorAll('.resposta-faq');

function aoClicarNaPergunta(indice) {
    const perguntaClicada = todasAsPerguntas[indice];
    const respostaCorrespondente = todasAsRespostas[indice];

    respostaCorrespondente.classList.toggle('visivel');
    perguntaClicada.classList.toggle('ativa');
}

todasAsPerguntas.forEach((pergunta, indice) => {
    pergunta.addEventListener('click', () => aoClicarNaPergunta(indice));
});