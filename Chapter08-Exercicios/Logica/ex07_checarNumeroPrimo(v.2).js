function checarNumeroPrimo (numero) {
    if (numero <= 0) {
        return false;
    }

    let contador = 0;

    for (let i = 0; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }

    return contador === 2;
}

function transformarBoolean (variavel) {
    if (variavel === true) {
        return "Verdadeiro";
    } else {
        return "Falso";
    }
}

console.log("--- Testando a Função de Número Primo ---");


console.log("O número 7 é primo?", transformarBoolean(checarNumeroPrimo(7)));

const resultadoTeste2 = checarNumeroPrimo(13);
console.log("O número 13 é primo?", transformarBoolean(resultadoTeste2));

const resultadoTeste3 = checarNumeroPrimo(2);
console.log("O número 2 é primo?", transformarBoolean(resultadoTeste3));


console.log("\n--- Testando Números Não Primos ---");

const resultadoTeste4 = checarNumeroPrimo(10);
console.log("O número 10 é primo?", transformarBoolean(resultadoTeste4));

const resultadoTeste5 = checarNumeroPrimo(9);
console.log("O número 9 é primo?", transformarBoolean(resultadoTeste5));

const resultadoTeste6 = checarNumeroPrimo(1);
console.log("O número 1 é primo?", transformarBoolean(resultadoTeste6));

const resultadoTeste7 = checarNumeroPrimo(0);
console.log("O número 0 é primo?", transformarBoolean(resultadoTeste7));

const resultadoTeste8 = checarNumeroPrimo(-5);
console.log("O número -5 é primo?", transformarBoolean(resultadoTeste8));