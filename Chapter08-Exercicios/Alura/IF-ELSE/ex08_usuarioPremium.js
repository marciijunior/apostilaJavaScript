function tipoDeUsuario(tipo) {
  const user = tipo;
  switch (user) {
    case "free":
      console.log("Acesso limitado");
      break;
    case "premium":
      console.log("Acesso total ao app.");
      break;
    case "super-premium":
      console.log("Acesso total mais bônus especiais.");
      break;
  }
}

const tipoDeConta = "super-premium";
tipoDeUsuario(tipoDeConta);
