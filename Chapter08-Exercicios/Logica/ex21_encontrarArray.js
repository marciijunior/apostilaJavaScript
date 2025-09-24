const encontrarSoma = (arr, numeroAlvo) => {
  let elemento1 = 0;
  let elemento2 = 0;
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    elemento1 = arr[i];
    for (let j = 0; j < arr.length; j++) {
      elemento2 = arr[j];
      if (elemento1 + elemento2 === numeroAlvo) {
        console.log(
          `O número alvo foi atingido pela soma de ${elemento1} e ${elemento2}, resultando em ${numeroAlvo}.`
        );
        contador++;
      }
    }
  }
  if (contador === 0) {
    console.log("Não foram encontradas nenhuma soma possíveis.");
  }
};

const arrNumeros = [2, 5, 7, 23, 12, 11];
const numeroEscolhido = 3;
encontrarSoma(arrNumeros, numeroEscolhido);
