function removerVogais(frase) {
    let fraseFinal = "";
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < frase.length; i++) {
        const fraseSuja = frase[i];
        const fraseLimpa = fraseSuja.toLowerCase();

        let ehVogal = false;

        for (let j = 0; j < vogais.length; j++) {
            if (fraseLimpa === vogais[j]) {
                ehVogal = true;
                break;
            }
        }

        if (ehVogal === false) {
            fraseFinal += fraseSuja;
        }
    }
    return fraseFinal;
}

const fraseExemplo = "Eu sou o Marcio amigo do Pedro e do Gabriel";
console.log('Frase original:', fraseExemplo);
console.log('A frase sem vogais é:', removerVogais(fraseExemplo));