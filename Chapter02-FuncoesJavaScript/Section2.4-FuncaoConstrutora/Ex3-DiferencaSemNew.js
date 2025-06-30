function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = function(){
        return (`Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

const Produto = Produto("TV", 2000);
console.log(Produto);