let contador = 0;

const intervalId = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  
  if (contador === 5) {
    clearInterval(intervalId); // Para o intervalo após 5 execuções
    console.log("Intervalo cancelado");
  }
}, 1000);
