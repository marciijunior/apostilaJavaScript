function encontrarMaiorNumero(numeros) {
    if (!numeros || numeros.length === 0) {
        return null;
    }
    return Math.max(...numeros);
}

const listaDeNumeros = [15, 8, 90, 4, 32, 101, 67];
const maior = encontrarMaiorNumero(listaDeNumeros);

console.log('Exercício 04: Maior Número');
console.log(`Lista de números: ${listaDeNumeros}`);
console.log(`O maior número é: ${maior}`);