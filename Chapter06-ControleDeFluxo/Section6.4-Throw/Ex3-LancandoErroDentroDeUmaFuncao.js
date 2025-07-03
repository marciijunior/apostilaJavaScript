function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero!");
  }
  return a / b;
}

console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Erro lançado
