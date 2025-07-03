const lista = "maçã,banana,laranja";
const frutas = lista.split(",");

console.log(frutas); // ["maçã", "banana", "laranja"]
console.log(frutas.join(" - ")); // "maçã - banana - laranja"
