function Carro(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.exibirInfo = function(){
    console.log(`Marca:${this.marca}, Modelo:${this.modelo}, Ano:${this.ano}, Cor:${this.cor}.`);
    };
}

const meuCarro = new Carro("Toyota", "Hilux", 2018, "Preta");

meuCarro.exibirInfo();

// Esse método cria uma instância para cada objeto criado. Por exemplo, um para Carro1, um para Carro2 e assim por diante.
// This method creates an instance for each object created. For example, one for Carro1, one for Carro2, and so on.