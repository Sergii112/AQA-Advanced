// const num1 = 123
// const num2 = 12.3

const num1 = 0.1;
const num2 = 0.2;
// console.log(num1, num2)

const sum = num1 + num2;
console.log(sum);

const expected = 0.3;

// node numbers.js

//= == operator porivnyannya. yaksho ok poverne true, yaksho necorectno poverne false
// console.log(sum === expected)

// Operator "toFixed" vuvede tilku 2 znaka p[islya krapku.
// console.log(sum.toFixed(2) === expected)

// operator "typeof" vuvede tup dannuh
// console.log(typeof sum.toFixed(2))
// === expected

// Ce "string", a potriben "number"
// console.log(Number(sum.toFixed(2)) === expected)
