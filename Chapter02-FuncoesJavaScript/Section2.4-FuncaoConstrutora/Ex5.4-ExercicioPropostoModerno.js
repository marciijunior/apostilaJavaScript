class Carro{
    constructor(marca, modelo, ano, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    exibirInfo(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}.`);
    }
}

const Carro1 = new Carro("Fiat", "Strada", 2003, "Melzinho");
Carro1.exibirInfo();