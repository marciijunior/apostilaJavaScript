const livro = {
  titulo: "JavaScript Essencial",
  autor: "Maria Silva",
  anoPublicacao: 2021,
  mostrarInformacoes: function () {
    console.log(`${this.titulo} - ${this.autor} (${this.anoPublicacao})`);
  }
};

livro.mostrarInformacoes();
// Saída: JavaScript Essencial - Maria Silva (2021)
