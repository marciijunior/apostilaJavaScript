const todasAsPerguntas = document.querySelectorAll('.accordion-pergunta');

function aoClicarNaPergunta(event) {
    const perguntaClicada = event.currentTarget;
    const itemDoAccordion = perguntaClicada.closest('.accordion-item');

    itemDoAccordion.classList.toggle('active');
}

todasAsPerguntas.forEach(pergunta => {
    pergunta.addEventListener('click', aoClicarNaPergunta);
});