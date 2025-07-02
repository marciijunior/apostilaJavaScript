const livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  ano: 1899
};

for (let chave in livro) {
  console.log(`${chave}: ${livro[chave]}`);
}