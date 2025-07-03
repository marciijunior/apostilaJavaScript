// Mensagem única após 3 segundos
setTimeout(() => {
  console.log("3 segundos se passaram!");
}, 3000);

// Contagem de 1 a 3
let i = 1;
const contador = setInterval(() => {
  console.log(i);
  i++;
  if (i > 3) {
    clearInterval(contador);
  }
}, 1000);
