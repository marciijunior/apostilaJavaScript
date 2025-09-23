const numeroEmFalta = (arr) => {
  const elem = 0;
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 1) {
      soma++;
    } else {
      soma++;
      console.log(`O número que está em falta é o número: ${soma}`);
      break;
    }
  }
};

const mainArr = [1, 2, 3, 4, 5, 7, 8, 9];
numeroEmFalta(mainArr);
