function* letrasDoAlfabeto(){
    yield "A";
    yield "B";
    yield "C";
    yield "D";
}

const letras = letrasDoAlfabeto();

console.log(letras.next().value);
console.log(letras.next().value);

console.log(letras.next());