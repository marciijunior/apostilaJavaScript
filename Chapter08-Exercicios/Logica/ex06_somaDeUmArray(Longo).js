function somarArrayComFor(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.lenght; i++) {
        soma += numeros[i];
    }

    return soma;
}

const listaDeNumeros = [0, 4, 23, 14, 65, 76, 53, 21, 33, 200];

const resultadoDaSoma = somarArrayComFor(listaDeNumeros);
console.log('---Usando o laço de repetição---')
console.log('A lista de numeros passado foi:', listaDeNumeros);
console.log('A soma da lista passada foi:', resultadoDaSoma);


