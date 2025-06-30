function calcularDobro(numero) {
    const resultado = numero * 2;
    return resultado;
}
const meuNumero = 5; 
const dobroDoMeuNumero = calcularDobro(meuNumero);
console.log(`O dobro de ${meuNumero} é ${dobroDoMeuNumero}.`);
const outroNumero = 12;
console.log(`O dobro de ${outroNumero} é ${calcularDobro(outroNumero)}.`);