function* contagemRegressiva(n){
    for(let i=n; i>=1; i--){
        yield i;
    }
}
for (const numero of contagemRegressiva(5)){
    console.log(numero);
}