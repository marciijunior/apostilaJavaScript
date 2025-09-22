function notasAlunos(notasAlunos, nomesAlunos, faltasAlunos) {
  if (faltasAlunos > 2) {
    console.log("Você nao receberá o bônus pois faltou muito!");
  } else {
    if (notasAlunos > 7 && faltasAlunos < 3) {
      console.log(`Olá ${nomesAlunos}, sua nota é ${notasAlunos} mais o bônus.`);
    } else {
      console.log(
        `Olá ${nomesAlunos}, sua nota é ${notasAlunos} sem nenhum bônus. Frequente mais as aulas ;-;`
      );
    }
  }
}

const nome = "Olavo";
const nota = 8;
const falta = 2;

notasAlunos(nota, nome, falta);
