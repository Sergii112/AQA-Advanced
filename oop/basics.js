// Процедурний підхід
// Процедурне програмування - це парадигма,
// в якій програма організована навколо послідовно виконуваних процедур або функцій.

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
// Функціональне програмування - це парадигма, в якій функції розглядаються як об’єкти першого класу,
// тобто можуть бути передані як аргументи і повернуті із функцій.
// Функції працюють з імутабельними даними, не змінюючи їх.

// const calculateSumFunctional = (a, b) => a + b;
// const doubleFunctional = a => a * 2;
//
// console.log(doubleFunctional(calculateSumFunctional(5, 3)));

// OOP підхід
// У ООП програма організована навколо об'єктів, які містять дані та методи для їх обробки.
// Об'єкти визначаються класами, які визначають структуру та поведінку об'єктів.

class Calculator {
  constructor() {
    this.PI = Math.PI;
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
// console.log(calc.PI)

console.log(`Aaaa: ${doubled}`); // Aaaa: 16
