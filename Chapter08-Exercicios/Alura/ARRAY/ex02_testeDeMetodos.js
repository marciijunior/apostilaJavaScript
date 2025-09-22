function arrNumeros(array1, array2, array3, array4) {
  array1.push(80);
  console.log(array1);
  // Esse metodo adiciona um número a determinada cordenada do vetor, e caso não seja especificado, adiciona ao fim.

  array2.pop();
  console.log(array2);
  // Esse método remove um número de uma determinada cordenada do vetor, e caso na seja especificado, remove o último.

  const elemento = array3.indexOf(12);
  console.log(elemento);
  // Esse método verifica se existe determinado elemento dentro do meu array, percorre um por um, sem precisar de for.

  const novoArray = array4.slice(4);
  console.log(novoArray, array4);
  // O método .slice, pega a partir do argumento dado ao parâmetro, e corta o array, atribuindo a outra metade a uma outra constante.
}

const arrDefinida = [1, 5, 8, 13, 16, 22, 45, 76];
arrNumeros(arrDefinida, arrDefinida, arrDefinida, arrDefinida);
