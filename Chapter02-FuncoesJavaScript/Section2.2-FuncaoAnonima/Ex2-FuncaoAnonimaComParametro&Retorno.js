const calcularDobro = function(numero) { 
    //Cria uma constante calcularDobro que recebe uma função anonima com o parâmetro numero. A função anonima tem com objetivo evitar a criação de uma variável extra para armazenar o resultado, diferente da função anterior. As vantagens são que o código fica mais conciso e fácil de ler, além de evitar a criação de variáveis desnecessárias. Porém, a desvantagem é que a função não tem um nome explícito, o que pode dificultar a depuração e a compreensão do código em casos mais complexos.
    return numero * 2;
    //Aqui sempre que a função for requisitada ela irá retornar o dobro do número passado como argumento do parâmetro.
};
const meuNumero = 7;
    // Aqui criamos uma constante cujo a função é receber um valor que será usado no futuro para servir de argumentos para o parâmetro da função calcularDobro.
console.log(`O dobro de ${meuNumero} é ${calcularDobro(meuNumero)}.`);
