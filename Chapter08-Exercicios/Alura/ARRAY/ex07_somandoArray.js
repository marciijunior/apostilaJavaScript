const somarListaDeCompras = (arr) => {
  let somaLista = 0;

  arr.forEach((elemento) => {
    // Você usa o índice i como argumento sempre que a POSIÇÃO de um elemento no array é tão importante quanto o seu VALOR.
    somaLista += elemento;
  });
  return somaLista;
};

const despesas = [120, 80, 45.5, 200, 60];
console.log(`A soma da lista é dada por: ${somarListaDeCompras(despesas)}`);    

const somarComReduce = (arr) => {
  return arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
};

console.log(`A soma com reduce é: ${somarComReduce(despesas)}`);