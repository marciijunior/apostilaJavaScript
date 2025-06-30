function* cores(){
    yield "Vermelho";
    yield "Verde";
    yield "Azul";
}

for (const cor of cores()){
    console.log(cor);
}

// Se lermos de forma semântica, chegamos no resultado "Para cada cor de cores, imprima a cor:".
// If we read it semantically, we get the result "For each cor of cores, print the color:".
