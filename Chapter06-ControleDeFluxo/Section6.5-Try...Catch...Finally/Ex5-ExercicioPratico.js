try {
  const valor = Number(prompt("Digite um número:"));
  if (isNaN(valor)) {
    throw new Error("Entrada inválida: não é um número.");
  }
  console.log(`O dobro de ${valor} é ${valor * 2}`);
} catch (erro) {
  console.log(erro.message);
} finally {
  console.log("Programa finalizado.");
}