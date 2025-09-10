function checarPalindromo(texto) {
    const textoMinusculo = texto.toLowerCase();
    const arrayDeCaracteres = textoMinusculo.split(' ');
    const textoFinal = arrayDeCaracteres.join('');
    const textoInvertido = textoFinal.split('').reverse().join('');
    return textoFinal === textoInvertido;
}

function converterBollean(valor) {
    if (valor === true) {
        return "Verdadeiro";
    } else {
        return "Falso";
    }
}