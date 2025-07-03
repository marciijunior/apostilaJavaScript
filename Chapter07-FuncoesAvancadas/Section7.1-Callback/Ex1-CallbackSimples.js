function exibirMensagem(mensagem) {
  console.log(mensagem);
}
function gerarMensagem(callback) {
  const msg = "Callback executado!";
  callback(msg);
}
gerarMensagem(exibirMensagem);
