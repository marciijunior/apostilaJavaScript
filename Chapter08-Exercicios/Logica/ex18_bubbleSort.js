const bubbleSort = (arr) => {
  const n = arr.lenght;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; i++) {
      // O que acontece é, no primeiro laço, temos que colocar cada número em seu lugar correto. Em todas as voltas, sempre terá um valor que será colocado em seu devido lugar, pois se tenho 5 cadeira e 5 pessoa numa sala, se 4 pessoas se sentarem, a última será obrigada a se sentar na cadeira que lhe resta. No próximo laço, acontece um otimização, afinal já temos o tamanho do array, o "-1" aparece pois sempre agruparemos de dois em dois, e se não usassemos, chegaria no v[n] e ele tentaria comparar com o v[n+1], porém o v[n+1] não existe, resultaria num erro, a próxima parte, -i diz para o algoritmo "Não precisamos ler mais que i, afinal daqui pra frente já esta tudo organizado".
      if (arr[j] > arr[j + 1]) {
        const valorTemporario = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = valorTemporario;
      }
    }
  }
  return arr;
};

const arrayUm = [4, 6, 1, 7, 2, 3, 3, 9];
bubbleSort(arrayUm);
