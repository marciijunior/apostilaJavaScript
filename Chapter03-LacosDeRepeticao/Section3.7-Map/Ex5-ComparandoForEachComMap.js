const numeros = [1, 2, 3, 4];

//forEach NÃO retorna um novo array
const resultadoForEach = numeros.forEach(numero => numero * 2);
console.log(resultadoForEach); // undefined

//map retorna um novo array
const resultadoMap = numeros.map(numero => numero * 2);
console.log(resultadoMap); // [2, 4, 6, 8]
