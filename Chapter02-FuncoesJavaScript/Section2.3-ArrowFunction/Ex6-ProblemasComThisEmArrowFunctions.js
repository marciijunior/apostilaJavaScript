const pessoas = {
    nome: "Carlos",
    apresentar: () => {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoas.apresentar();

// Arrow functions não têm seu próprio this. Elas herdam o this do contexto em que foram criadas, que nesse caso é o escopo global (ou o módulo, dependendo do ambiente). Como this.nome não existe no escopo global, retorna undefined.

//

const pessoa = {
    nome: "Carlos",
    apresentar: () => {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoa.apresentar();

// O nome do objeto (pessoa ou pessoas) não importa. O problema está no uso da arrow function, que não cria um this próprio.

const pessoaCorreta = {
  nome: "Carlos",
  apresentarCorreto() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};
pessoaCorreta.apresentarCorreto();

// Funções tradicionais possuem seu próprio this, e dentro de um método de objeto, o this faz referência ao próprio objeto. Logo, this.nome retorna "Carlos" corretamente.