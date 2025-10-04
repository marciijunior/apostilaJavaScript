// tag
console.log("tag:");

var titulo = document.getElementsByTagName("h1");

console.log(titulo[0]);

var lista = document.getElementsByTagName("li");

console.log(lista);

// id - Limite de uma seleção, não espera uma collection. Sempre espera somente um!
console.log("id:");

const paragrafo = document.getElementById("paragrafo");

console.log(paragrafo);

// class
console.log("class:");

const itensDaLista = document.getElementsByClassName("item");

console.log(itensDaLista);

// sem querySelectorAll
console.log("sem querySelectorAll:");

const itensClasse = document.getElementsByClassName("item");

console.log(itensClasse);

// com querySelectorAll
console.log("querySelectorAll:");

const itensQuery = document.querySelectorAll("#lista2 li");

console.log(itensQuery);

const itensQuery2 = document.querySelectorAll("#lista .item");

console.log(itensQuery2);

// querySelector
console.log("querySelector:");

const listaQ = document.querySelector("#lista");

console.log(lista);

const primeiraLista = document.querySelector("ul");

console.log(primeiraLista);

const span = document.querySelector("#paragrafo span");

console.log(span);


