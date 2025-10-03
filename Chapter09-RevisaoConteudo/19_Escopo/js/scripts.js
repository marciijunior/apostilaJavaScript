var x = 1;
var y = 3;
console.log(x, y);

// Variaveis dentro de uma function, não aparecem para o restante do código
function teste() {
  var z = 0;
  console.log(z, x);
}
teste();

function testando() {
  var z = 4;
  console.log(z);
}
testando();

// O if não haje da mesma forma
if (true) {
  var p = 8;
}
console.log(p);
