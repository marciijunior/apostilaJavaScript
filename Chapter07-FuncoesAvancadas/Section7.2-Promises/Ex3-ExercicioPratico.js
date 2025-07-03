function operacaoAssincrona(sucesso) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) {
        resolve("Operação concluída com sucesso!");
      } else {
        reject("Falha na operação.");
      }
    }, 1000);
  });
}
operacaoAssincrona(true)
  .then(console.log)
  .catch(console.error);
operacaoAssincrona(false)
  .then(console.log)
  .catch(console.error);
