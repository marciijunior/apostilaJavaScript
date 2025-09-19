function bonusSalarial(salario) {
  let bonus = 0;
  let salarioTotal = 0;
  let parteDoSalario = 0;

  if (salario >= 11000) {
    bonus += 0.03;
  } else if (salario <= 10999 && salario >= 7000) {
    bonus += 0.05;
  } else if (salario <= 6999 && salario >= 4000) {
    bonus += 0.07;
  } else if (salario <= 3999) {
    bonus += 0.09;
  }

  parteDoSalario += salario * bonus;
  salarioTotal += salario + parteDoSalario;

  console.log(
    `O bônus salarial do professor, que recebe 6000, é ${parteDoSalario.toFixed(
      2
    )} do valor original. O sendo o total de: ${salarioTotal}`
  );
}

const salarioParaCalcular = 6000;

bonusSalarial(salarioParaCalcular);
