let x = 5;
x = 12;
const y = 10;
console.log(x);
console.log("const " + y);
// Notamos que let pode ser alterado, e que tem o valor de 12;

if (true) {
  let x = 20;
  console.log(x);
  const y = 50;
  console.log("const if" + y);
  // Estando dentro de um laço, ao declararmos uma variável com let, ela passa a ser temporária, e existirá enquanto aquele código existir.
}

console.log(x);

if (20 > 10) {
  const y = 100;
  console.log("const if 3" + y);
}

for (let x = 0; x < 10; x++) {
  console.log(x);
}
