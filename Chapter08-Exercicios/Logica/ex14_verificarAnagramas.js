function verificarAnagramas(word1, word2) {
  if (word1.length !== word2.length) {
    console.log(`As palavras ${word1} e ${word2} não são anagramas.`);
  } else {
    let verificador = 0;

    const array1Palavra = [];
    const array2Palavra = [];

    const palavra1Minuscula = word1.toLowerCase();
    const palavra2Minuscula = word2.toLowerCase();

    if(palavra1Minuscula === palavra2Minuscula){
        console.log(`As palavras ${word1} e ${word2} são as mesmas palavras`)
    }

    const arrayPalavra1 = palavra1Minuscula.split("");
    const arrayPalavra2 = palavra2Minuscula.split("");

    for (let i = 0; i < arrayPalavra1.length; i++) {
      letraDaPalavra1 = array1Palavra[i];
      for (let j = 0; j < arrayPalavra2.length; j++) {
        letraDaPalavra2 = array2Palavra[j];
        if (array1Palavra[i] === array2Palavra[j]) {
          verificador++;
          arrayPalavra2[j] = null;
          break;
        }
      }
    }

    if (verificador === arrayPalavra1.length) {
      console.log(`As palavras ${word1} e ${word2} são anagramas.`);
    } else {
      console.log(`As palavras ${word1} e ${word2} não são anagramas.`);
    }
  }
}

const palavra1 = "bolo";
const palavra2 = "lobo";
verificarAnagramas(palavra1, palavra2);

const palavra3 = "japones";
const palavra4 = "safado";
verificarAnagramas(palavra3, palavra4);

const palavra5 = "Pedro";
const palavra6 = "Pedro";
verificarAnagramas(palavra5, palavra6);

