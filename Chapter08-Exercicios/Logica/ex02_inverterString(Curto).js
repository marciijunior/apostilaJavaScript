// @param {string} texto
// @returns {string}

function inverterStringComMetodos(texto) {
    const arrayDeLetras = texto.split('');
    const arrayInvertido = arrayDeLetras.reverse();
    const textoInvertido = arrayInvertido.join('');
    return textoInvertido;
}

const stringOriginal = "Frase a ser invertida.";

console.log("Teste com o Método Curto (com métodos de array):")
const invertida = inverterStringComMetodos(stringOriginal)
console.log(`Original: ${stringOriginal}`);
console.log(`Invertida: ${invertida}`);