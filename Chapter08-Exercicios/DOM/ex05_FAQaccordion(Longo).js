const todasAsPerguntas = document.querySelectorAll('.accordion-pergunta');
// Seleciona cada um dos (accordion-pergunta) e guarda todos em uma array chamada (todasAsPerguntas).

function  aoClicarNaPergunta(evento) {
    const perguntaClicada = evento.currentTarget;
    // Isso seleciona a pergunta que foi clicada.
    const itemDoAccordion = perguntaClicada.
    parentElement;
    // ParentElement seleciona diretamente o elemento pai, e adiciona esse elemento a variável itemDoAccordion.

    if (itemDoAccordion.classList.contains('active')){
        itemDoAccordion.classList.remove('active');
    } else {
        itemDoAccordion.classList.add('active');
    }
    // Aqui ele verifica se o item do accordion já contém a classe css (active), se sim, ele remove a classe (active) do item do accordion, se não, ele adiciona a classe (active) ao item do accordion.
}

for (let i = 0; i < todasAsPerguntas.lenght; i++) {
    const perguntaAtual = todasAsPerguntas[i];
    perguntaAtual.addEventListener('click', aoClicarNaPergunta);
}
// Aqui ele cria um loop que percorre toda a array(todasAsPerguntas) e para cada pergunta ele adicionaria um evento de clique que chama a função (aoClicarNaPergunta) quando a pergunta for clicada.

