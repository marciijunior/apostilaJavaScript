const promessaErro = new Promise((resolve, reject) => {
  reject("Erro na operação!");
});

promessaErro
  .then(() => {
    console.log("Sucesso");
  })
  .catch((erro) => {
    console.log("Erro capturado:", erro);
  });
