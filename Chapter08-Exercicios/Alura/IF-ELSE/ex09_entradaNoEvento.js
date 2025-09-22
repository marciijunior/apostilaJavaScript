function entradaNoEvento(idade) {
  const idadePermitida = idade;

  const verificador = idadePermitida > 17 ? "Acesso permitido." : "Acesso negado.";

  console.log(verificador);
}

const pessoaIdade = 18;
entradaNoEvento(pessoaIdade);