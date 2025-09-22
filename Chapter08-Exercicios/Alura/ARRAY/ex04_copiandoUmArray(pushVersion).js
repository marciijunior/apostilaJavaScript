  const copiaArray = (arr) => {
  const copia = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copia.push(copiaArray(elem));
    } else {
      copia.push(elem);
    }
  });
  return copia;
};

const arrDefinida = [[1, 5, 8, [4, 65, 88]], 13, 16, 22, [3, 78], 45, 76];
copiaArray(arrDefinida);

console.log(`Cópia: ${copiaArray(arrDefinida)}.`);
console.log(`arrDefinida: ${arrDefinida}.`)

