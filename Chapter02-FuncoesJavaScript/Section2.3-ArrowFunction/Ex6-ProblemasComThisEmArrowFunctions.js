const pessoas = {
    nome: "Carlos",
    apresentar: () => {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoas.apresentar();

// Arrow functions não têm seu próprio this. Elas herdam o this do contexto em que foram criadas, que nesse caso é o escopo global (ou o módulo, dependendo do ambiente). Como this.nome não existe no escopo global, retorna undefined.
// Arrow functions dont have their own this. They inherit the this do context in it they were created, which in the case is the global scope(or the module, depending on the environment). Since this.nome does not exist in the global scope, it returns undefined.

const pessoa = {
    nome: "Carlos",
    apresentar: () => {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoa.apresentar();

const pessoaCorreta = {
  nome: "Carlos",
  apresentarCorreto() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};
pessoaCorreta.apresentarCorreto();

// Funções tradicionais possuem seu próprio this, e dentro de um método de objeto, o this faz referência ao próprio objeto. Logo, this.nome retorna "Carlos" corretamente.
// Traditional functions have their own this, and inside an object method, this refers to the object itself. Therefore, this.nome correctly returns "Carlos".