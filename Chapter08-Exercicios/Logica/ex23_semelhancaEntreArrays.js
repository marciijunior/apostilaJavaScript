class SemelhancaEntreArrays {
  constructor() {
    this.arrayNovo = [];
  }

  compararArrays(arrUm, arrDois) {
    for (let i = 0; i < arrUm.length; i++) {
      const elementoi = arrUm[i];
      for (let j = 0; j < arrDois.length; j++) {
        const elementoj = arrDois[j];
        if (elementoj === elementoi) {
          this.arrayNovo.push(elementoi);
        }
      }
    }
  }
}

const primeiraComparacao = {
  arrayUm: [2, 5, 7, 8, 4, 2, 3, 4, 1, 7, 4, 2, 7, 9],
  arrayDois: [2, 5, 3, 4, 9, 5, 1, 0, 2, 1, 6, 3, 2, 1],
};

const minhaComparacao = new SemelhancaEntreArrays();

minhaComparacao.compararArrays(
  primeiraComparacao.arrayUm,
  primeiraComparacao.arrayDois
);

console.log(minhaComparacao.arrayNovo);
