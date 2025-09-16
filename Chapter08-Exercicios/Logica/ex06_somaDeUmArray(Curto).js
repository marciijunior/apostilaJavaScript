function somarArrayComReduce(numeros) {
    const soma = numeros.reduce((acumulador, numeroAtual) => {
        return acumulador + numeroAtual;
    }, 0);

    return soma;
}

const listaDeNumeros = [10, 5, 2, 8, 15];

const resultadoComReduce = somarArrayComReduce(listaDeNumeros);
console.log("\n--- Usando o Método '.reduce()' ---");
console.log("A lista de números é:", listaDeNumeros);
console.log("A soma total é:", resultadoComReduce);