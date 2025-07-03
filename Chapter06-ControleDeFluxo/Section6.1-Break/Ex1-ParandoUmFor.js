const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 30) {
    console.log("Número encontrado:", numeros[i]);
    break;
  }
  console.log("Procurando...");
}
