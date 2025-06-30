function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = function() {
        return `Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`;
    };
}

const Produto1 = new Produto("Notebook", 3500);
const Produto2 = new Produto("Smartphone", 2200);
const Produto3 = new Produto("TV", 3900);

console.log(Produto1.descricao());
console.log(Produto2.descricao());
console.log(Produto3.descricao());
