const dataInicio = new Date("2025-01-01");
const dataFim = new Date("2025-12-31");

const diferenca = dataFim - dataInicio; // Em milissegundos
const dias = diferenca / (1000 * 60 * 60 * 24); // Converte em dias

console.log(`Diferença: ${dias} dias`);