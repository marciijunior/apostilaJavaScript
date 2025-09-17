function celsiusParaFahrenheit(temperaturaCelsius) {
    const fahrenheit =  (temperaturaCelsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitParaCelsius(temperaturaFahrenheit) {
    const celsius = (temperaturaFahrenheit - 32) * 5/9;
    return celsius;
}

const celsiusSerConvertido = 45;
const fahrenheitSerConvertido = 77;

console.log('A temperatura em fahrenheit é:', celsiusParaFahrenheit(celsiusSerConvertido));
console.log('A temperatura em celsius é:', fahrenheitParaCelsius(fahrenheitSerConvertido))