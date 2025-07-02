function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numero = gerarNumeroAleatorio(50, 100);
console.log(numero);
