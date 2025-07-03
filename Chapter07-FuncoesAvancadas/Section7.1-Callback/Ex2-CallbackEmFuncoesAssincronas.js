function tarefaAssincrona(callback) {
  setTimeout(() => {
    callback("Tarefa concluída!");
  }, 2000);
}

tarefaAssincrona((mensagem) => {
  console.log(mensagem);
});
