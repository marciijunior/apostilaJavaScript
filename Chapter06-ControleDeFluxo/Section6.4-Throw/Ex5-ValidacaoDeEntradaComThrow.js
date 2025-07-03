function verificarIdade(idade) {
  if (idade < 0) {
    throw new Error("Idade inválida!");
  }
  return `Idade informada: ${idade}`;
}

try {
  console.log(verificarIdade(-5));
} catch (erro) {
  console.log("Erro:", erro.message);
}