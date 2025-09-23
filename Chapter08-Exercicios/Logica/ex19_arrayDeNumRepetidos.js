const repetidos = (arr1, arr2) => {
  const numerosRepetidos = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        numerosRepetidos.push(arr1[i]);
      }
    }
  }
  return numerosRepetidos;
};

const arrUm = [1, 4, 7, 9, 12, 14, 15, 16, 22];
const arrDois = [2, 3, 4, 6, 9, 12, 14, 15, 22];
console.log(`Os array originais são: ${arrUm} e ${arrDois}.`);
console.log(`O array de números repetidos é: ${repetidos(arrUm, arrDois)}`);
