function obterSaudacaoPersonalizada(nome) {
  return `Olá, ${nome}!`;
}
function exibirMensagemCompleta(nomePessoa, idadePessoa) { 
//nomePessoa e idadePessoa são dois parametros (nome).
//nomePessoa e idadePessoa are two parameters(nome).
const saudacao = obterSaudacaoPersonalizada(nomePessoa);
		console.log(`${saudacao} Você tem ${idadePessoa} anos.`);
//const saudacao transforma a função obterSaudacaoPersonalizada em uma constante, que no function exibirMensagemCompleta, joga um argumento para parâmetro (nome), retornando um “Olá, Fulano”.
//const saudacao transform the function obterSaudacaoPersonalizada into a constant, which in the function exibirMensagemCompleta, throws an argument for the parameter (nome), returning "Olá, Fulano".
}
exibirMensagemCompleta("Maria", 30); // Saída: Olá, Maria! Você tem 30 anos.
exibirMensagemCompleta("João", 25);  // Saída: Olá, João! Você tem 25 anos.
//Função(argumento, argumento);
//Function(argument, argument);
