const aluno = {
  nome: "Carlos",
  notas: {
    matematica: 9,
    portugues: 8
  }
};

for (let prop in aluno.notas) {
  console.log(`${prop}: ${aluno.notas[prop]}`);
}