function anoBissexto(ano) {
  const possibilidadePorQuatro = ano % 4;
  const possibilidadePorCem = ano % 100;
  const possibilidadePorQuatrocentos = ano % 400;

  if (possibilidadePorQuatro === 0 && possibilidadePorCem !== 0) {
    console.log(`O ano de ${ano} é Bissexto.`);
  } else if (
    possibilidadePorQuatrocentos === 0 &&
    possibilidadePorQuatrocentos === 0
  ) {
    console.log(`O ano de ${ano} é Bissexto.`);
  } else {
    console.log(`O ano de ${ano} não é Bissexto.`);
  }
}

const anoEscolhido = 2006;
anoBissexto(anoEscolhido);
