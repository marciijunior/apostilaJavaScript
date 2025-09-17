let soma = 0;

function somaDeArray(numeros)  {
    const soma = numeros.reduce((acumulador, numeroAtual) => {
        return acumulador + numeroAtual;
    }, 0);
    return soma;
}

const listaDeNumeros = [10, 43, 6, 12, 51];

const resultadoComReduce = somarArrayComFor(listaDeNumeros);
console.log("Usando o laço 'for'");
console.log("A lista de números é:", listaDeNumeros);
console.log("A soma total é:", resultadoComReduce);