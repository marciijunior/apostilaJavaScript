function gerarFibonacci(n) {
    if (n <= 0) {
        return [];
    }

    const sequencia = new Array(n);
    sequencia[0] = 0;

    if (n > 1) {
        sequencia[1] = 1;
    }

    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    return sequencia;
}


console.log("--- Gerando Fibonacci sem '.push()' ---");
console.log("Os 10 primeiros números são:", gerarFibonacci(10));
console.log("Os 2 primeiros números são:", gerarFibonacci(2));
console.log("O primeiro número é:", gerarFibonacci(1));