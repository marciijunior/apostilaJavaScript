console.log(`Formato utilizando construtores:`)
function Pessoa(nome, idade) {
    // Criando uma função construtora chamada "Pessoa". O "this" se refere ao novo objeto que será criado com "new Pessoa"
    this.nome = nome;       
    this.idade = idade;
    // Atribui o valor recebido ao atributo "nome" do objeto. Atribui o valor recebido ao atributo "idade" do objeto. Cria um método chamado "apresentar" dentro do próprio objeto. Essa função poderá ser chamada depois para exibir os dados da pessoa
    this.apresentar = function() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}

// Usando a função construtora para criar um novo objeto chamado "pessoa1 & pessoa2"
const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Carlos", 30);

// Chamando o método "apresentar" do objeto "pessoa1" & "pessoa2"
pessoa1.apresentar();
pessoa2.apresentar();

console.log(`Formato tradicional:`)
// Formato tradicional
function apresentarTradicional(nome, idade) {
    console.log(`Olá! Meu nome é ${nome} e tenho ${idade} anos.`);
}
apresentarTradicional("Ana", 25);
apresentarTradicional("Carlos", 30);

console.log(`Outro formato tradicional:`)
// Outra forma tradicional
const pessoaTradicional = {
    nome: "Ana",
    idade: 25,
    apresentarOutraForma: function(){
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoaTradicional.apresentarOutraForma();