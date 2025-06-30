function* saudacoes() {
  yield "Olá";
  yield "Tudo bem?";
  yield "Até logo!";
}

const gerador = saudacoes();

console.log(gerador.next()); // { value: 'Olá', done: false }
console.log(gerador.next()); // { value: 'Tudo bem?', done: false }
console.log(gerador.next()); // { value: 'Até logo!', done: false }
console.log(gerador.next()); // { value: undefined, done: true }

// Do termo inglês, yield significa render/produzir, onde através dela podemos pausar e continuar a execução de uma função. Elas não retornam valores diretamente, porém geram múltiplos valores sob demanda.
//yield can pause and continue the execution of a function. They do not return values ​​directly, but generate multiple values ​​on demand.