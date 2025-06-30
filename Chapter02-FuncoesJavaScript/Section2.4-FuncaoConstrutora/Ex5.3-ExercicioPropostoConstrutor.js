// 1. Função construtora Carro
function Carro(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
}

Carro.prototype.exibirInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}.`);
};

const Carro1 = new Carro("Toyota", "Hilux", 2018, "Preta");
const Carro2 = new Carro("Ford", "Fiesta", 2020, "Azul");

Carro1.exibirInfo();
Carro2.exibirInfo();

// Quando utilizamos prototype, será instânciado somente uma vez na memória, e os objetos serão sempre salvos no mesmo mesmo local, economizando assim memória de processamento.
// When we use prototype, it will be instantiated only once in memory, and the objects will always be saved in the same location, thus saving processing memory.