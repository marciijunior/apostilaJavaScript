const permissao = (idade >= 18) ? permitirEntrada() : negarEntrada();

function permitirEntrada() {
  return "Bem-vindo!";
}

function negarEntrada() {
  return "Acesso negado.";
}

console.log(permissao);
