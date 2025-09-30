class Carrinho {
  constructor() {
    this.items = [];
    this.subtotal = 0.0;
  }

  adicionarItem(item) {
    this.items.push(item);
    console.log(`"${item.nome}" foi adicionado ao carrinho.`);
    this.recalcularSubtotal();
  }

  removerItem(indice) {
    if (indice > -1 && indice < this.items.length) {
      const itemRemovido = this.items.splice(indice, 1);
      console.log(`"${itemRemovido[0].nome}" foi removido.`);
      this.recalcularSubtotal();
    }
  }

  recalcularSubtotal() {
    this.subtotal = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.subtotal += this.items[i].preco;
    }
  }

  mostrarResumo() {
    console.log("\n--- Resumo do Carrinho ---");
    console.log(`Total de Itens: ${this.items.length}`);
    this.items.forEach((item, i) => {
      console.log(`${i}: ${item.nome} - R$ ${item.preco.toFixed(2)}`);
    });
    console.log(`Subtotal: R$ ${this.subtotal.toFixed(2)}`);
    console.log("------------------------\n");
  }
}

const produto1 = { nome: "Headphone Bluetooth", preco: 249.9 };
const produto2 = { nome: "Teclado Mecânico", preco: 350.0 };
const produto3 = { nome: "Mouse Gamer", preco: 125.5 };

const meuCarrinho = new Carrinho();

meuCarrinho.adicionarItem(produto1);
meuCarrinho.adicionarItem(produto2);

meuCarrinho.mostrarResumo();

meuCarrinho.adicionarItem(produto3);
meuCarrinho.mostrarResumo();

meuCarrinho.removerItem(0);
meuCarrinho.mostrarResumo();
