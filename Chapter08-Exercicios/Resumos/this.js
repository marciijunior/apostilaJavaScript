const carrinho = { // Ao declararmos que isso será um objeto
  items: [],
  subtotal: 0.0,

  adicionarItem(item) {
    this.items.push(item);
    console.log(`"${item.nome}" foi adicionado ao carrinho.`);
    this.recalcularSubtotal();
  },

  removerItem(indice) {
    if (indice > -1 && indice < this.items.length) {
      const itemRemovido = this.items.splice(indice, 1);
      console.log(`"${itemRemovido[0].nome}" foi removido.`);
      this.recalcularSubtotal();
    }
  },

  recalcularSubtotal() {
    this.subtotal = 0;
    for (let i = 0; i < this.items.length; i++) {
      this.subtotal += this.items[i].preco;
    }
  },

  mostrarResumo() {
    console.log("\n--- Resumo do Carrinho ---");
    console.log(`Total de Itens: ${this.items.length}`);
    this.items.forEach((item, i) => {
      console.log(`${i}: ${item.nome} - R$ ${item.preco.toFixed(2)}`);
    });
    console.log(`Subtotal: R$ ${this.subtotal.toFixed(2)}`);
    console.log("------------------------\n");
  },
};

// No mundo real, importaríamos o módulo
// const carrinho = require('./carrinho.js');

const produto1 = { nome: "Headphone Bluetooth", preco: 249.9 };
const produto2 = { nome: "Teclado Mecânico", preco: 350.0 };
const produto3 = { nome: "Mouse Gamer", preco: 125.5 };

// 1. O utilizador adiciona produtos ao carrinho
carrinho.adicionarItem(produto1);
carrinho.adicionarItem(produto2);

// 2. Vemos o estado atual do carrinho
carrinho.mostrarResumo();

// 3. O utilizador adiciona mais um item
carrinho.adicionarItem(produto3);
carrinho.mostrarResumo();

// 4. O utilizador decide remover o primeiro item (Headphone)
carrinho.removerItem(0);
carrinho.mostrarResumo();
