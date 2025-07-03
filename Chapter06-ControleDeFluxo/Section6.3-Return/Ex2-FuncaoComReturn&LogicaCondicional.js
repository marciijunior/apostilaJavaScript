function verificaMaioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  }
  return "Menor de idade";
}

console.log(verificaMaioridade(20)); // "Maior de idade"
