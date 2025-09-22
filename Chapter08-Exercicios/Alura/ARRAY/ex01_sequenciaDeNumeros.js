function sequenciaDeNumeros(numero1, numero2) {
  let sequenciaDeNumeros = [];
  let elemento = numero1;
  for (let i = 0, j = 0; j < numero2; i++, elemento++) {
    sequenciaDeNumeros[i] = elemento;
    j = elemento;
  }
  console.log(`${sequenciaDeNumeros}`);
}

sequenciaDeNumeros(3, 79);
