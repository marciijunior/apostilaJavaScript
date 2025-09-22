function notasAlunos(notasAlunos, nomesAlunos, faltasAlunos) {
  if (faltasAlunos > 2) {
    console.log("Você nao receberá o bônus pois faltou muito!");
  } else {
    const estadoFinal =
      notasAlunos > 7 && faltasAlunos < 3
        ? `Olá ${nomesAlunos}, sua nota é ${notasAlunos} mais o bônus.`
        : `Olá ${nomesAlunos}, sua nota é ${notasAlunos} sem nenhum bônus. Frequente mais as aulas ;-;`;
    console.log(estadoFinal);
  }
}

const nome = "Olavo";
const nota = 7;
const falta = 2;

notasAlunos(nota, nome, falta);
