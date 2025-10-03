const nome = "Matheus";
console.log(nome.length);
// Retorna o tamanho da palavra.

const frase = "O rato roeu a roupa do rei de Roma";
console.log(frase[2]);
// Retorna a segunda letra da frase.
console.log(frase.indexOf("roeu"));
// Busca e retorna o indice da palavra roeu.

const roeu = frase.slice(7, 11);
console.log(roeu);
// Corta uma string, podendo retornar uma nova string, com uma nova palavra adicionada, cortada ou excluída.

const novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);
// Substitui uma palavra determinada de uma string, por outra também determinada.

// .case

const fraseCases = "Esta é a frase que vamos manipular";
const fraseCaixaAlta = fraseCases.toUpperCase();
console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toLowerCase());

// .trim

const nomePessoa = "               Marcio            ";
const nomeTrim = nomePessoa.trim();
// Retira todo o espaço a mais digitado.
console.log(nomePessoa);
console.log(nomeTrim);

// .split

console.log(frase.split(" "));
const tags = "PHP, JavaScript, HTML, CSS";
console.log(tags.split(", "));

// .lastIndexOf

const fraseDois = "Eu quero a última palavra teste dessa frase";
console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));
