const obj = Object.create({ cor: "vermelho" });
obj.nome = "Objeto Personalizado";

for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}
