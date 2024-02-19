// Процедурний підхід
// function calculateSum(a, b) {
//     return a + b;
// }
//
// function double(a) {
//     return a * 2;
// }
//
// const sum = calculateSum(5, 3);
// const doubled = double(sum);
//
// console.log(doubled);

// Функціональний підхід
// const calculateSumFunctional = (a, b) => a + b;
// const doubleFunctional = a => a * 2;
//
// console.log(doubleFunctional(calculateSumFunctional(5, 3)));

// OOP підхід
class Calculator {
    constructor() {
        this.PI = Math.PI
    }

    sum(a, b) {
        return a + b;
    }

    double(num) {
        return num * 2;
    }
}

const calc = new Calculator();
const sum = calc.sum(5, 3);
const doubled = calc.double(sum);

console.log(`Aaaa ${doubled}`)