function exemplo(numero) {
  if (numero < 0) {
    return "Número inválido";
  }
  return numero * 2;
}

console.log(exemplo(-5)); // "Número inválido"
console.log(exemplo(4));  // 8
