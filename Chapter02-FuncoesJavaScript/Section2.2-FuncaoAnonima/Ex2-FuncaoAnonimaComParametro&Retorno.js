const calcularDobro = function(numero) { 
    // Cria uma constante calcularDobro que recebe uma função anonima com o parâmetro numero. A função anonima tem com objetivo evitar a criação de uma variável extra para armazenar o resultado, diferente da função anterior. As vantagens são que o código fica mais conciso e fácil de ler, além de evitar a criação de variáveis desnecessárias. Porém, a desvantagem é que a função não tem um nome explícito, o que pode dificultar a depuração e a compreensão do código em casos mais complexos.
    // Creates a constant calcularDobro that receives an anonimous function with the parameter number. The anonymous function aims to avoid the creation of an extra variable to save the result, unlike the previous function. The advantages are that the code is more concise and easy to read, in addition to avoiding the creation of unnecessary variables. However, the disadvantage is that the function does not have an explicit name, which can make debugging and understanding the code difficult in more complex cases.
    return numero * 2;
    // Aqui sempre que a função for requisitada ela irá retornar o dobro do número passado como argumento do parâmetro.
    //  Here, whenever the function is requested, it will return twice the number passed as the parameter argument.
};
const meuNumero = 7;
    // Aqui criamos uma constante cujo a função é receber um valor que será usado no futuro para servir de argumentos para o parâmetro da função calcularDobro.
    // Here we create a constant whose function is to receive a value that will be used in the future to serve as arguments for the parameter of the calculateDouble function.
console.log(`O dobro de ${meuNumero} é ${calcularDobro(meuNumero)}.`);
