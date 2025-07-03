try {
  throw new Error("Algo deu errado!");
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}
