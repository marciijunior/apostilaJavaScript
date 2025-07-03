const numeros = [0, 2, 0, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 0) {
    continue;
  }
  console.log(numeros[i]);
}
