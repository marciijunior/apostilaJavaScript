function obterNome(nome) {
  return nome ?? "Anônimo";
}

console.log(obterNome("João")); // João
console.log(obterNome(null));   // Anônimo
