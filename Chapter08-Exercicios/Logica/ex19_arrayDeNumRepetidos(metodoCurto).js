const arrayRepetido = (arr1, arr2) => {
  const arrVazia = [];
  arr1.forEach((elemento) => {
    if (arr2.includes(elemento)) {
      arrVazia.push(elemento);
    }
  });
  return arrVazia;
};

const arrUm = [1, 4, 7, 9, 12, 14, 15, 16, 22];
const arrDois = [2, 3, 4, 6, 9, 12, 14, 15, 22];
console.log(`Os array originais são: ${arrUm} e ${arrDois}.`);
console.log(`O array de números repetidos é: ${arrayRepetido(arrUm, arrDois)}`);
