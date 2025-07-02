const computador = {
  marca: "Dell",
  modelo: "XPS",
  preco: 8000
};
for (let prop in computador) {
  console.log(`${prop} (${typeof computador[prop]}) → ${computador[prop]}`);
}