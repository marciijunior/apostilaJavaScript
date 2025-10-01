// ---- And ---- //

const numero = 4;

if (numero === "5") {
  console.log("O número é 5");
}

if (numero !== 5) {
  console.log("Não é o número 5 do tipo number");
}

// ---- Or ---- //

const idade = 12;
const nomeOr = "João";

if (nome == "João" || idade > 14) {
  console.log("Pode entrar na aula de esgrima");
} else {
  console.log("Não pode entrar");
}

if ((nomeOr == "Pedro" || 30 > 20) && 10 == 10) {
  console.log("Testando");
} else {
  console.log("Não entrou");
}

// ---- Not ---- //

if (!false) {
  console.log("Passou") ; 
}

const nome = "Matheus";

if (!(nome == "João")) {
  console.log("Ok");
}
