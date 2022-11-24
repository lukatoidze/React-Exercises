// Task #1

function equal(a, b) {
    return (a === b) ? 'ტოლია' : 'არ არის ტოლი';
}

console.log(equal(10, 10));


// Task #2

function celsiusToFahrenheit (temperature) {
    return isNaN(temperature) === false ? Math.round((temperature - 32) / 1.8) : false;
}

console.log(celsiusToFahrenheit(100));


// Task #3

function equation(x, y, operator) {
    if (isNaN(x) === true || isNaN(y) === true || typeof operator !== 'string') return false;
    else if (operator === '+') return x + y; 
    else if (operator === '-') return x - y;
    else if (operator === '*') return x * y;
    else if (operator === '/') return x / y;
}

console.log(equation(64, 20, '+'));

