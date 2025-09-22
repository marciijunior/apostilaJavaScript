function arrTransform(array) {
  const newArr1 = [];
  let element = 0;

  for (let i = 0; i < array.length; i++) {
    element = array[i];
    newArr1[i] = element * 10;
  }

  const newArr2 = array.map((num) => {
    return num * 10;
  });

  const newArr3 = array;
  newArr3.forEach((num, i) => {
    console.log(`O número ${num} está no índice ${i}.`);
  });

  const newArr4 = array;
  const arrFiltrado = newArr4.filter((num) => num % 5 === 0);

  

  console.log(`Utilizando o for fica assim: ${newArr1}`);
  console.log(`Utilizando o map fica assim: ${newArr2}`);
  console.log(`Utilizando o forEach fica assim: ${newArr3}`);
  console.log(arrFiltrado);
}

const arrDefinida = [1, 5, 8, 13, 16, 22, 45, 76];
arrTransform(arrDefinida);
