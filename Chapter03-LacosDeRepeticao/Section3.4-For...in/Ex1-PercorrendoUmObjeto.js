const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "São Paulo"
};

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
