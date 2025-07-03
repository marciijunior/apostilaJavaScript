const pessoa = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo"
};

const json = JSON.stringify(pessoa);

console.log(json);
// Saída: {"nome":"Ana","idade":25,"cidade":"São Paulo"}
