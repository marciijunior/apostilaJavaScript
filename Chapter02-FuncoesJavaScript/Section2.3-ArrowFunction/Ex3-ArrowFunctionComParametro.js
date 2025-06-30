const exibirMensagem = (nome) => `Olá, ${nome}!`;
console.log(exibirMensagem("Marcinho1"));

// O arrow function substitui a palavra-chave function por uma seta (=>) e permite uma sintaxe mais concisa. No fim da contas, é a mesma coisa, mas com uma sintaxe mais limpa e moderna.
// The arrow function replaces the function keyword with an arrow (=>) and allows for a more concise syntax. Ultimately, it's the same thing, but with a cleaner, more modern syntax.

const exibirMensagemSemArrow = function(nome) {
    return `Olá, ${nome}!`;
}
console.log(exibirMensagemSemArrow("Marcinho2"));

// A diferença entre as duas funções é que a primeira usa a sintaxe de arrow function, enquanto a segunda usa a sintaxe tradicional de função. Ambas retornam uma string formatada com o nome passado como argumento.
// The difference between the two functions is that the first one uses the arrow function syntax, while the second one uses the traditional function syntax. Both return a formatted string with the name passed as an argument.

const exibirMensagemComParentesesOmitidos = nome => `Olá, ${nome}!`;
console.log(exibirMensagemComParentesesOmitidos("Marcinho3"));

// Na arrow function, caso não seja passado nenhum tipo de parametro, os parenteses podem ser omitidos.
// In the arrow function, if no type of parameter is passed, the parentheses can be omitted.