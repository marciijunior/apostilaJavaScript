function glauberQuadrado(lados, chato){
    if (lados === 4 || chato === true){
        console.log('Voce e o Gluaber sem nenhuma duvida!');
    } else {
        console.log('Voce nao e o Glauber, pode ficar tranquilo.')
    }
}

const numDeLados = 4;
const serChato = true;

glauberQuadrado(numDeLados, serChato);