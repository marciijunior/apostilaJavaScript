const copiarArray = (arr) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (Array.isArray(num)) {
      newArray.push(copiarArray(num));
    } else {
      newArray.push(num);
    }
  }
  return newArray;
};

const arrDefinida = [[1, 5, 8, [4, 65, 88]], 13, 16, 22, [3, 78], 45, 76];
copiarArray(arrDefinida);

console.log(`Original: ${arrDefinida}.`);
console.log(`Cópia: ${copiarArray(arrDefinida)}.`);
