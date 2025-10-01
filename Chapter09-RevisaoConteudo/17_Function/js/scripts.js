console.log("Imprimir nomes:");

function primeiraFuncao() {
  console.log("Hello world da funções");
}
primeiraFuncao();

function dizerNome(Aluno) {
  console.log(`O nome dele é: ${Aluno}`);
}
const nomeDoAluno = "João";
const nomeDoAluno2 = "Marcio";
const nomeDoAluno3 = "Bianca";
dizerNome(nomeDoAluno);
dizerNome(nomeDoAluno2);
dizerNome(nomeDoAluno3);

// --------------------------------------------

console.log("Somas:");

function soma(a, b) {
  let somaDeVariaveis = a + b;
  return somaDeVariaveis;
}

let somaUm = soma(2, 5);
let somaDois = soma(5623, 4534);
console.log(somaUm);
console.log(somaDois);
