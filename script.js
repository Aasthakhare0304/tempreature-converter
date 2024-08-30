
function convert() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
    
    if (temperatureInput === '') {
        resultDiv.textContent = 'Please enter a temperature.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    
    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature} °C is ${fahrenheit.toFixed(2)} °F`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature} °F is ${celsius.toFixed(2)} °C`;
    }
}
