const botoesAbas = document.querySelectorAll(".aba-link"); //O "querySelectorAll" não é igual ao getElementById que procura por um Id em específico, o querySelectorAll procura por uma classe, ou seja, o ponto antes do nome "aba-link" indica que é uma classe.
const conteudoAbas = document.querySelectorAll(".aba-conteudo");

function aoClicarNaAba(event) {
  const botaoClicado = event.currentTarget; //Diz ao navegador que o local que foi clicado, será adicionado a constante "botaoClicado".
  const idDoConteudoAlvo = botaoClicado.dataset.aba; //

  conteudoAbas.forEach((conteudo) => {
    conteudo.classList.remove("active");
  });
  botoesAbas.forEach((botao) => {
    conteudo.classList.remove("active");
  });

  const conteudoAlvo = document.getElementById(idDoConteudoAlvo);

  conteudoAlvo.classList.add("active");
  botaoClicado.classList.add("active");
}

botoesAbas.forEach((botao) => {
  botao.addEventListener("click", aoClicarNaAba);
});
