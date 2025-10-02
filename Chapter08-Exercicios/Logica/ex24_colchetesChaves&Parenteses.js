function validarParentesesManual(str) {
  const pilha = [];
  let topoDaPilha = 0;

  const mapaDePares = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (mapaDePares[char]) {
      pilha[topoDaPilha] = char;
      topoDaPilha++;
    } else {
      let isSimboloDeFechamento = false;
      for (const key in mapaDePares) {
        if (mapaDePares[key] === char) {
          isSimboloDeFechamento = true;
          break;
        }
      }

      if (isSimboloDeFechamento) {
        if (topoDaPilha === 0) {
          return false;
        }

        topoDaPilha--;
        const ultimoAberto = pilha[topoDaPilha];

        if (mapaDePares[ultimoAberto] !== char) {
          return false;
        }
      }
    }
  }

  return topoDaPilha === 0;
}

console.log(`"()[]{}" é válido? ${validarParentesesManual("()[]{}")}`);
console.log(`"([{}])" é válido? ${validarParentesesManual("([{}])")}`);