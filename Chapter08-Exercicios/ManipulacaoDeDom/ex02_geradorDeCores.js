function mudarCorDeFundo() {
    const caracteresHex = '0123456789ABCDEF';
    let corAleatoria = '#';
    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * 16);
        corAleatoria += caracteresHex[indiceAleatorio];
    }
    document.body.style.backgroundColor = corAleatoria;
    document.getElementById('output-texto').textContent = `Cor Gerada: ${corAleatoria}`;
    
}
document.getElementById('botao-principal').addEventListener('click', mudarCorDeFundo);