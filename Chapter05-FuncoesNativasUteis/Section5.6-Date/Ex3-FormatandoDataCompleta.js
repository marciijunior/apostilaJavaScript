const hoje = new Date();

const dia = hoje.getDate();
const mes = hoje.getMonth() + 1; // Corrigir mês (0-11)
const ano = hoje.getFullYear();

console.log(`${dia}/${mes}/${ano}`); // Exemplo: 23/6/2025
