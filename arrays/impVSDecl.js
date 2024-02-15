
// const numbers = [1, 2, 3, 4, 5];
//
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

// for (const num of numbers) {
//     sum += num
// }

// console.log(sum)

//

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num)=> acc + num)
console.log(sum)