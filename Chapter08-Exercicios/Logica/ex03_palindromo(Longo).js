function limparString(texto) {
  const textoMinusculo = texto.toLowerCase();
  let textoFinal = '';
  for (let i = 0; i < textoMinusculo.length; i++) {
    const caractereAtual = textoMinusculo[i];
    if (caractereAtual !== ' ') {
      textoFinal += caractereAtual;
    }
  }
  return textoFinal;
}

function checarPalindromo(texto) {
  const textoLimpo = limparString(texto);
  let textoInvertido = '';
  for (let i = textoLimpo.length - 1; i >= 0; i--) {
    textoInvertido += textoLimpo[i];
  }

  return textoLimpo === textoInvertido;
}

function converterBooleanParaPalavra(valor) {
  if (valor === true) {
    return "Verdadeiro"; 
  } else {
    return "Falso";
  }
}

const fraseTeste = "Anotaram a data da maratona";

console.log("Testando a Versão Final Completa");

const resultadoBooleano = checarPalindromo(fraseTeste);
const resultadoEmPalavra = converterBooleanParaPalavra(resultadoBooleano);
console.log(`A frase "${fraseTeste}" é um palíndromo? ${resultadoEmPalavra}`);