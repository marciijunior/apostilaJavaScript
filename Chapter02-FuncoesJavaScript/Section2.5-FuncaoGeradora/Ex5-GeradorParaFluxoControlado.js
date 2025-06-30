function* conversacao(){
    const resposta = yield "Como você está?";
    yield `Que bom saber que você está ${resposta}.`;
}

const chat = conversao();

console.log(chat.next().value);
console.log(chat.next("bem").value);