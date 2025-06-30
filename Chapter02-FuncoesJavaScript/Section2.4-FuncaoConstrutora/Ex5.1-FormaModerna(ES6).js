class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Olá. Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("Ana", 25);
pessoa1.apresentar();