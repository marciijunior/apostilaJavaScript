const aluno = {
  nome: "Lucas",
  idade: 20,
  curso: "Computação"
};

for (let chave in aluno) {
  console.log(`${chave}: ${aluno[chave]}`);
}
// nome: Lucas
// idade: 20
// curso: Computação
