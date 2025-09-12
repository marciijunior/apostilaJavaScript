function contadorDeVogais(frase) {
    const fraseMinuscula = frase.toLowerCase();
    let contador = 0;

    for (let i = 0; i < fraseMinuscula.length; i++) {
        const caractereAtual = fraseMinuscula[i];
        if (
            caractereAtual === 'a' ||
            caractereAtual === 'e' ||
            caractereAtual === 'i' ||
            caractereAtual === 'o' ||
            caractereAtual === 'u'
        ) {
            contador++;
        }
    }
    return contador;
}

const frase = "Exemplo de frase para o contador de vogais trabalhar.";
const totalVogais = contadorDeVogais(frase);


console.log(`Frase: "${frase}"`);
console.log(`A frase possui ${totalVogais} vogais.`)