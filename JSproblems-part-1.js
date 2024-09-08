// task-1 start here;
// Write a function to convert temperature from Celsius to Fahrenheit.

function getCelsiusToFahrenheit(celsius){

    let fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
}

const convertFahrenheit = getCelsiusToFahrenheit(5);
console.log(`Todays tempareture is ${convertFahrenheit} fahrenheit`);

