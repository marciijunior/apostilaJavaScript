let numero;
do {
  numero = Number(prompt("Digite um número maior que 0:"));
} while (numero <= 0);
console.log(`Número digitado: ${numero}.`);
