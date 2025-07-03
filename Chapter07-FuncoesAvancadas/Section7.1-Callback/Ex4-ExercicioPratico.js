function somar(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

somar(5, 7, function(resultado) {
  console.log(`O resultado da soma é ${resultado}`);
});
