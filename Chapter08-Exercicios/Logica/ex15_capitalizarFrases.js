const capitalizadorFrase = (frase) => {

    const arrPalavras = frase.split(" ");
    const palavrasCapitalizadas = [];

    for (let i = 0; i < arrPalavras.length; i++) {
        const palavra = arrPalavras[i];

        if (palavra.length > 0) {
            const primeiraLetra = palavra[0].toUpperCase();
            const restoDaPalavra = palavra.substring(1).toLowerCase();
            palavrasCapitalizadas.push(primeiraLetra + restoDaPalavra);
        }
    }
    return palavrasCapitalizadas.join(" ");
};

const fraseParaSerCapitalizada = "A cadeira branca do apartamento, está ficando marrom com o tempo";

const fraseFinal = capitalizadorFrase(fraseParaSerCapitalizada);
console.log(fraseFinal);
