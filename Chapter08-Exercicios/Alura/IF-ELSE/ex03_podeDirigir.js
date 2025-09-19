function podeDirigir(idade) {
    if(idade>=18){
        console.log('Pode dirigir chefia!');
    } else if (idade === 17){
        console.log('Vai procurar uma autoescola seu cabaco!');
    } else {
        console.log('Chispa, tu nem pode dirigir!');
    }
}

const idadeDaPessoa = 17;
podeDirigir(idadeDaPessoa);