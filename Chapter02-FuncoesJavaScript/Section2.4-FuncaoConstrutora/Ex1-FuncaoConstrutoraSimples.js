console.log(`Formato utilizando construtores:`)
function Pessoa(nome, idade) {
    // Criando uma função construtora chamada "Pessoa". O "this" se refere ao novo objeto que será criado com "new Pessoa".
    // Creating a constructor function called "Pessoa". The "this" refers to the new object that will be created with "new Pessoa"
    this.nome = nome;       
    this.idade = idade;
    // Atribui o valor recebido ao atributo "nome" do objeto. Atribui o valor recebido ao atributo "idade" do objeto. Cria um método chamado "apresentar" dentro do próprio objeto. Essa função poderá ser chamada depois para exibir os dados da pessoa.
    // Assign the received value to the object's "nome" attribute. Assign the received value to the object's "idade" attribute. Create a method called "apresentar" within the object itself. This function can be called later to display the person's data.

    this.apresentar = function() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}

// Usando a função construtora para criar um novo objeto chamado "pessoa1 & pessoa2".
// Using the constructor function to create a new object called "pessoa1 & pessoa2".
const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Carlos", 30);

// Chamando o método "apresentar" do objeto "pessoa1" & "pessoa2".
// Calling the "apresentar" method of the object "pessoa1" & "pessoa2".
pessoa1.apresentar();
pessoa2.apresentar();

console.log(`Formato tradicional:`)
// Formato tradicional.
// Traditional format.
function apresentarTradicional(nome, idade) {
    console.log(`Olá! Meu nome é ${nome} e tenho ${idade} anos.`);
}
apresentarTradicional("Ana", 25);
apresentarTradicional("Carlos", 30);

console.log(`Outro formato tradicional:`)
// Outra forma tradicional.
// Another traditional way.
const pessoaTradicional = {
    nome: "Ana",
    idade: 25,
    apresentarOutraForma: function(){
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoaTradicional.apresentarOutraForma();