const numeros = [10, 15, 22, 33, 40];

numeros.forEach(numero => {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
});
