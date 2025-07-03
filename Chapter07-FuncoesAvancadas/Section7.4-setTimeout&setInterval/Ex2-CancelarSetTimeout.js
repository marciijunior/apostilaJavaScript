const timeoutId = setTimeout(() => {
  console.log("Isso não será exibido");
}, 3000);

clearTimeout(timeoutId); // Cancela o timeout antes de executar
