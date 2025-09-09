let count = 0;

function updateDisplay() {
    document.getElementById('output-texto').textContent = count;
}

function handleIncrement() {
    count++;
    updateDisplay();
}

function handleDecrement() {
    count--;
    updateDisplay();
}

function handleReset() {
    count = 0;
    updateDisplay();
}

document.getElementById('botao-principal').addEventListener('click', handleIncrement);
document.getElementById('botao-secundario').addEventListener('click', handleDecrement);
document.getElementById('botao-reset').addEventListener('click', handleReset);

updateDisplay();