function contarVogais(texto) {
    const vogaisEncontrar = texto.match(/[aeiou]/gi);
    return vogaisEncontrar ? vogaisEncontrar.length : 0;
}

const frase = "Exemplo de frase para o contador de vogais trabalhar.";
const numeroDeVogais = contarVogais(frase);

console.log(`Frase: "${frase}"`);
console.log(`A frase possui ${numeroDeVogais} vogais.`);