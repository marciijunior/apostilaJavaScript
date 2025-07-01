const nome = "João";
(function() {
  const nome = "Maria";
  console.log(nome); // Saída: Maria
})();
console.log(nome); // Saída: João

// IIFE são usadas para criar escopos privados, evitando conflitos de variáveis.