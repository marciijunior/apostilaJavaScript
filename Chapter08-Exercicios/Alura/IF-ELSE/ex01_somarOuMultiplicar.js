function somaOuMultiplicacao(operacao) {
  if (operacao === "soma") {
    console.log(numero1 + numero2);
  } else if (operacao === "multiplicacao") {
    console.log(numero1 * numero2);
  } else {
    console.log("operação não indentificada");
  }
}

const operacaoFeita = "soma";
const numero1 = 5;
const numero2 = 7;

somaOuMultiplicacao(operacaoFeita);