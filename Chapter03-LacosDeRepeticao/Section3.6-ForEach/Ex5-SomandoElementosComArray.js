const numeros = [1, 2, 3, 4, 5];
let soma = 0;

numeros.forEach(numero => {
  soma += numero;
});

console.log(`Soma total: ${soma}`);