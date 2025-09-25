const rotacaoArr = (arr, n) => {
  let arrNovo = [];
  let numeroDivisor = 0;
  const tamanhoN = arr.length;
  let quantasRotacoes = n;

  if (n>tamanhoN){
    numeroDivisor = quantasRotacoes % tamanhoN;
  } else {
    numeroDivisor = n;
  }
  for (let i = 0; i < numeroDivisor; i++) {
    elemento = arr[i];
    arr[i] = 
  }
};
