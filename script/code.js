
document.querySelector('#tempConverterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    var temperature = parseFloat(document.querySelector('#temperature').value);
    var fromUnit = document.querySelector('#fromUnit').value;
    var toUnit = document.querySelector('#toUnit').value;
    
   
    var result;
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperature + 273.15;
    }
    else {
        result = temperature; 
    }
    

    document.querySelector('#result').innerText = "Result: " + result.toFixed(2) + " " + toUnit;
});