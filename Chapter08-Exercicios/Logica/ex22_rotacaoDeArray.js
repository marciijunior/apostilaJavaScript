const rotacionarArray = (arr, rotacoes) => {
  let rotacoesReais = rotacoes % arr.length;
  let arrNovo = [...arr];
  let ultimoNumero = 0;
  const tamanhoN = arr.length;

  for (let r = 0; r < rotacoesReais; r++) {
    ultimoNumero = arrNovo[tamanhoN - 1];
    for (let i = tamanhoN - 1; i > 0; i--) {
      arrNovo[i] = arrNovo[i - 1];
    }
    arrNovo[0] = ultimoNumero;
  }
  return arrNovo;
};

const primeiroArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rotacoesPropostas = 8;
console.log(
  `O array ${primeiroArray} rotacionado ${rotacoesPropostas} vezes, fica assim: ${rotacionarArray(
    primeiroArray,
    rotacoesPropostas
  )}`
);