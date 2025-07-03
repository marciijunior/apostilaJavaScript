async function buscarDados() {
  const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json());
  console.log(dados);
}
buscarDados();
