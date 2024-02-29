// console.log(calculateSumDeclaration(2,5)) // Ok
// console.log(calculateSumExpression(2,5)) // Error

// Function declaration
function calculateSumDeclaration(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

// function expression
const calculateSumExpression = function (num1, num2) {
  const sum = num1 + num2;
  return sum;
};
// console.log(calculateSumExpression(2,4))

// arrow function expression
const calculateSumArrow = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};
// console.log(calculateSumArrow(2,9))

// concise arrow function expression
const calculateSumArrow2 = (num1, num2) => num1 + num2;
console.log(calculateSumArrow2(2, 6));

// const calculateSquareArea = (width, height) => width * height
// console.log(calculateSquareArea(6, 10))  - moy primer s dz
