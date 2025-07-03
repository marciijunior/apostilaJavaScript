try {
  console.log("Tentando executar código...");
  throw new Error("Erro lançado");
} catch (erro) {
  console.log("Erro:", erro.message);
} finally {
  console.log("Este bloco sempre será executado.");
}
