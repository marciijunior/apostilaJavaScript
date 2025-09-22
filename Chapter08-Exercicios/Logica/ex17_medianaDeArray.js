const mediana = () => {
    const elemento = [];
    let soma = 0;
    let resutado = 0;
    arr.forEach((elem) => {
        Array.isArray(elem)? elemento.push(mediana(elem)):elemento.push(elem);
    });
    

}