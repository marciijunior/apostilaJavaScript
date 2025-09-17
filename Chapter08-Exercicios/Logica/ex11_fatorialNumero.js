function calcularFatorial(num) {
    if(num < 0) {
        console.log('Não existe fatorial de número negativo.')
    }

    let soma = 1;

    for (let i = num; i > 1; i--){
        soma = soma*i;
    }
    
    return soma;
}

console.log('O valor do fatorial desse numero é:',calcularFatorial(3));
console.log('O valor do fatorial desse numero é:',calcularFatorial(8));
console.log('O valor do fatorial desse numero é:',calcularFatorial(4));
console.log('O valor do fatorial desse numero é:',calcularFatorial(90));