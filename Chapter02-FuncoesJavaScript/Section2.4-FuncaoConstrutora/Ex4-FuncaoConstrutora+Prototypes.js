function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.falar = function() {
  console.log(`${this.nome} faz um som.`);
};

const cachorro = new Animal("Bolt");
cachorro.falar();