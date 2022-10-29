// You are asked to implement a feature for a weather app. This feature takes the
// temperature in Manila from the servers of PAGASA and converts it from one scale
// to another.
// Implement 2 functions:
// convertToKelvin(tempCelsius) that converts Celsius to Kelvin
// convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin

// 0°C + 273.15 = 308.15K 
function convertToKelvin(tempCelcius){
    let Kelvin = tempCelcius + 273.15;
    return Kelvin;
}

function fahrenheitToKelvin(Fahrenheit){
    let Kelvin = (Fahrenheit + 459.67) * 5/9;
    return Kelvin;
}

var tempCelcius = 100;
var Fahrenheit =32; 
console.log(convertToKelvin(tempCelcius))//tempCelcius
console.log(fahrenheitToKelvin(Fahrenheit))//tempFahrenheit