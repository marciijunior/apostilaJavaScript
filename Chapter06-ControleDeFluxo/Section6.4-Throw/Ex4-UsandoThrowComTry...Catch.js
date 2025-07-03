try {
  throw new Error("Erro encontrado!");
} catch (erro) {
  console.log("Capturado:", erro.message);
}
