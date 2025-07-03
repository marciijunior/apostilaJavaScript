function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function calcularDobro(numero) {
  await delay(1000);
  return numero * 2;
}

(async () => {
  const resultado = await calcularDobro(5);
  console.log(resultado); // 10 (após 1 segundo)
})();
