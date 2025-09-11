const botoesAbas = document.querySelectorAll('.aba-link');
const conteudosAbas = document.querySelectorAll('.aba-conteudo'); // Em ambos os casos, a máquina irá interpretar da seguinte forma: "Selecione todos os elementos que possuem a classe 'aba-link' ou 'aba-conteudo'". Portanto ela irá retornar uma lista (NodeList) com todos os elementos que possuem essas classes no HTML.

function criarFuncaoDeClique(indice) {
  return function() { // Função que será executada quando o botão for clicado, ela congela o valor de 'indice'que foi passado como o argumento.
    for (let j = 0; j < conteudosAbas.length; j++) {
      conteudosAbas[j].classList.remove('active');
    }
    for (let j = 0; j < botoesAbas.length; j++) {
      botoesAbas[j].classList.remove('active');
    }

    botoesAbas[indice].classList.add('active');
    conteudosAbas[indice].classList.add('active');
  };
}

for (let i = 0; i < botoesAbas.length; i++) {
  const botaoAtual = botoesAbas[i];
  const funcaoDeClique = criarFuncaoDeClique(i);
  botaoAtual.addEventListener('click', funcaoDeClique);
}