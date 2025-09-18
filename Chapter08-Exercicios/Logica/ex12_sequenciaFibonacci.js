function funcaoFibonacci(n) {
  if (n <= 0) {
    return [];
  }

  const sequencia = new Array(n);
  sequencia[0] = 0;

  if (n >= 1) {
    sequencia[1] = 1;
  }

  for (let i = 2; i < n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }

  return sequencia;
}

const n = 100;
console.log("Sequência de Fibonacci:", funcaoFibonacci(n));
