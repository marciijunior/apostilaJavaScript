function comparadorDeArrays(lista) {
  const listaDefinitiva = [];

  for (let i = 0; i < lista.length; i++) {
    if (!listaDefinitiva.includes(lista[i])) {
      listaDefinitiva.push(lista[i]);
    }
  }

  return listaDefinitiva;
}

const listaBraba = [32, 32, 33, 33, 44, 44, 43, 100];
console.log(comparadorDeArrays(listaBraba));
