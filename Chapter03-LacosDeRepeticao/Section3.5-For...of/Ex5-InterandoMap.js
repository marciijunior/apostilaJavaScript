const mapa = new Map([
  ["nome", "Lucas"],
  ["idade", 30],
  ["cidade", "Rio de Janeiro"]
]);

for (const [chave, valor] of mapa) {
  console.log(`${chave}: ${valor}`);
}
