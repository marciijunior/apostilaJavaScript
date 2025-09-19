function verificadorDeAposentadorias(idade, contribuicao){
    if(idade>=60 || contribuicao>= 180){
        console.log('Pode se aposentar');
    } else {
        console.log('Nao pode se aposentar');
    }
}

const idadePessoa = 70;
const contribuicaoPessoa = 390;

verificadorDeAposentadorias(idadePessoa, contribuicaoPessoa);