const logado = true;
const admin = false;

const acesso = logado && admin ? "Permitido" : "Negado";

console.log(acesso);