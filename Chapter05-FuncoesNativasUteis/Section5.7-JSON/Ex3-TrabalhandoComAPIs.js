const respostaAPI = '{"produto":"Notebook","preco":3500,"estoque":true}';

const produto = JSON.parse(respostaAPI);

console.log(produto.produto); // "Notebook"
console.log(produto.preco);   // 3500
console.log(produto.estoque); // true
