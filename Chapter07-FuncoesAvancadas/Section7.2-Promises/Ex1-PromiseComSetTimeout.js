function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperou ${ms} milissegundos`);
    }, ms);
  });
}

esperar(2000).then((mensagem) => {
  console.log(mensagem); // "Esperou 2000 milissegundos"
});
