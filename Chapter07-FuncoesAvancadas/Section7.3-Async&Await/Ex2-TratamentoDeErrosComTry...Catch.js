async function carregarDados() {
  try {
    const resposta = await fetch("https://url-invalida");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log("Erro ao carregar dados:", erro.message);
  }
}

carregarDados();
