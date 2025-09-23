const arraySort = (arr) => {
  const copiaDoArray = arr.slice();

  copiaDoArray.sort((a, b) => a - b);
  // O .sort não entende subtração, ele somente vem pronto para compara os números dado a ele. Se a for maior que b, true, então ele troca, e assim por diante.

  return copiaDoArray;
};

const arrayUm = [4, 6, 1, 7, 2, 3, 3, 9];

const resultado = arraySort(arrayUm);

console.log("Array Original:", arrayUm);
console.log("Array Ordenado:", resultado);
