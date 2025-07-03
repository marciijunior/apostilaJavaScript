const numeros = [5, -2, 8, -9, 12];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) {
    continue; // Pula números negativos
  }
  console.log(numeros[i]);
}
