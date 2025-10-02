const lista = ["Laranja", "Maça", "Pera", "Jaca", "Limão"];

// Aqui criamos uma lista e adicionamos na const listaUl.
const listaUl = document.createElement("ul");

// Aqui selecionamos todo o <body></body>.
const body = document.getElementsByTagName("Body");

// console.log(body[0]);

body[0].appendChild(listaUl);

const listaNoBody = document.getElementsByTagName("ul");

console.log(listaNoBody[0]);

for (var i = 0; i < lista.length; i++) {
  const liFor = document.createElement("li");
  const textoLi = document.createTextNode(lista[i]);
  liFor.appendChild(textoLi);
  listaNoBody[0].appendChild(liFor);
}
