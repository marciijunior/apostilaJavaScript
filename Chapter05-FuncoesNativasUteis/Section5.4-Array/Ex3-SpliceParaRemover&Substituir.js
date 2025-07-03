const cores = ["vermelho", "verde", "azul"];

cores.splice(1, 1, "amarelo"); // Remove "verde", adiciona "amarelo"

console.log(cores); // ["vermelho", "amarelo", "azul"]
