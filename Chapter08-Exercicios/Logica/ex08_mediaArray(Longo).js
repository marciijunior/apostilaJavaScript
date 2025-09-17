function calcularMediaArray(numero) {

    if (numero.length === 0) {
        return 0;
    }

    let somaDeArray = 0;
    for (let i = 0; i < numero.length; i++) {
        somaDeArray += numero[i];
    }

    const media = somaDeArray / numero.length;
    return media;
}

const listaDeNumeros = [12, 23, 53, 64, 22, 11];

console.log("A lista passada é", listaDeNumeros);
console.log("A média da lista é:", calcularMediaArray(listaDeNumeros));