const achatador = (arr) => {
  const elemento = [];
  arr.forEach((elem) => {
    Array.isArray(elem) ? elemento.push(achatador(elem)) : elemento.push(elem);
  });
  return elemento;
};

const arr1 = [1, [2, 3], [4, [5, 6]], 7, 8];
console.log(`Aqui esta o array unificado: ${achatador(arr1)}`);