const imprimirNome = (palavra) => {
  for (let i = 0; i < palavra.length; i++) {
    console.log(`Estudante: ${palavra[i]}`);
  }
};

const imprimirNomeComForOf = (palavra) => {
  for (const nome of palavra) {
    console.log("Estudante:", nome);
  }
};

const estudantes = ["Carla", "João", "Marina", "Lucas", "Beatriz"];

imprimirNome(estudantes);
imprimirNomeComForOf(estudantes);
