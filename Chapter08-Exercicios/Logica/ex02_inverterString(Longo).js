// @param {string} texto - A string que será invertida.
// @returns {string} A string invertida.

function inverterStringComLoop(texto) {
    let textoInvertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}

const stringOriginal = "Frase a ser invertida.";

console.log("Teste com o Método Longo (com o laço for):")
const invertida = inverterStringComLoop(stringOriginal);
console.log(`Original: ${stringOriginal}`);
console.log(`Invertida: ${invertida}`);
