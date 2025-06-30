function* contarAte(numero){
    for (let i = 1; i <= numero; i++){
        yield i;
    }
}
// Uma function chamada contarAte, receberá um argumento para o parâmetro chamado numero. Em seguida temos um for, que na linguagem semântica fica como: "Começando com i=1, essa função irá imprimir o número resultante de i, caso o total de i seja diferente do argumento passado ao parâmetro que foi nomeado com "numero", a função somará 1 em i, até que i=numero."
// A function called contarAte, will receive an argument for the parameter called number. Then we have a for, which in semantic language looks like: “Starting with i=1, this function will print the number resulting from i, if the total of i is different from the argument passed to the parameter named ‘numero’, the function will add 1 to i, until i=numero.”

const contador = contarAte(10);
for (const numero of contador){
    console.log(numero);
}

// Para cada numero de contador, imprima numero.
// For each numero of contador, print numero.