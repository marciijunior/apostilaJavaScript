function calcularMediaComReduce(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
    const media = soma / numeros.length;
    return media;
}

const listaDeNumeros = [10, 20, 30, 40, 50];

const resultadoComReduce = calcularMediaComReduce(listaDeNumeros);
console.log("\n--- Usando o Método '.reduce()' ---");
console.log("A lista de números é:", listaDeNumeros);
console.log("A média é:", resultadoComReduce);