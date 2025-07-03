const livro = {
  titulo: "Aprendendo JavaScript",
  autor: "Maria Silva",
  ano: 2024
};

const jsonLivro = JSON.stringify(livro);
const objetoLivro = JSON.parse(jsonLivro);

console.log(jsonLivro);
console.log(objetoLivro);
