function encontrarMaiorNumero(numeros) {
    if (!numeros || numeros.lenght === 0) {
        return null;
    }
    let maiorNumero = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    return maiorNumero;
}

const listaNumeros = [3, 5, 7, 2, 8, 90, 43, 61];
const maior =  encontrarMaiorNumero(listaNumeros);

console.log('Exercício 04: Maior Número');
console.log(`Lista de números: ${listaNumeros}`);
console.log(`O maior número é: ${maior}`);