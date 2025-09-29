const operacoesAritmeticas = () => {
  let divisao = 15 / 3; // divisao será 5
  console.log(divisao);

  let resto = 10 % 3; // resto será 1 (10 dividido por 3 é 3 com resto 1)
  console.log(resto);

  let isPar = 8 % 2 === 0; // true
  console.log(isPar);

  let potencia = 2 ** 3; // potencia será 8 (2 * 2 * 2)
  console.log(potencia);

  let x = 10;
  let y = ++x; // x se torna 11, então y recebe 11
  console.log(`x: ${x}, y: ${y}`); // saída: x: 11, y: 11
  // ao colocarmos o ++ à direita, asseguramos que o x incremente antes de ser atribuida a variável "y"

  let a = 10;
  let b = a++; // b recebe 10, então a se torna 11
  console.log(`a: ${a}, b: ${b}`); // saída: a: 11, b: 10
  // ao colocarmos o ++ à esquerda, asseguramos que o "a" somente incremente o valor com +1 a "b"

  let valor = 7;
  valor--; // valor agora é 6
  console.log(valor); // decrementar também é possível

  // Comparações: -----------------------------------------------------------------------------

  console.log(5 == 5); // true
  console.log(5 == "5"); // true (o string "5" é convertido para número)
  console.log(5 == false); // false
  console.log(0 == false); // true

  // Estritamente Igual: ----------------------------------------------------------------------

  console.log(5 === 5); // true
  console.log(5 === "5"); // false (número vs string)
  console.log(0 === false); // false (número vs booleano)

  // Diferente De: ------------------------------------------------------------------------------

  console.log(10 != "5"); // true
  console.log(5 != "5"); // false

  // Estritamente Diferente De: ----------------------------------------------------------------

  console.log(10 !== "5"); // false
  console.log(5 !== 5); // false

};

operacoesAritmeticas();
