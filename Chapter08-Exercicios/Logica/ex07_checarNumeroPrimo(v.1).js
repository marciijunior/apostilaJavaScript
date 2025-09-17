function checarNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }       

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("--- Testando a Função de Número Primo ---");

console.log("O número 7 é primo?", checarNumeroPrimo(7));
console.log("O número 13 é primo?", checarNumeroPrimo(13));
console.log("O número 2 é primo?", checarNumeroPrimo(2));

console.log("\n--- Testando Números Não Primos ---");
console.log("O número 10 é primo?", checarNumeroPrimo(10));
console.log("O número 9 é primo?", checarNumeroPrimo(9));
console.log("O número 1 é primo?", checarNumeroPrimo(1));
console.log("O número 0 é primo?", checarNumeroPrimo(0));
console.log("O número -5 é primo?", checarNumeroPrimo(-5));