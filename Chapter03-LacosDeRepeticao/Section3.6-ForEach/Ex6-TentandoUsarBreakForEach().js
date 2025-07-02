const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
  if (numero === 3) {
    // break; // ❌ Isso gera erro → não pode usar break em forEach
  }
  console.log(numero);
});
