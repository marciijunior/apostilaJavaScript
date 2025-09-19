const sequenciaFinal = [];

function removerDuplicatas(lista) {
  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];
    if (!sequenciaFinal.includes(elemento)) {
      sequenciaFinal.push(elemento);
    }
  }
  return sequenciaFinal;
}

const listaSuja = [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8, 9];
console.log("A versao original da lista com duplicados é:", listaSuja);
console.log("A lista sem duplicatas é: ", removerDuplicatas(listaSuja));