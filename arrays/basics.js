//      (Array) - це структура даних, яка дозволяє зберігати та упорядковувати набір елементів в одному об'єкті.
//     Елементи масиву можуть бути будь-якого типу даних, включаючи числа, рядки, об'єкти чи навіть інші масиви.

//      Масиви можна створювати за допомогою літералу масиву [] або конструктора Array().
// const fruits = new Array()

//      Для доступу до елементів масиву використовуються індекси, які починаються з 0 для першого елемента.
// const fruits = ["apple", "pineapple", "banana", 111, true, "Hello"]
// console.log(fruits[0]) // apple

/// ///////////
// const fruits = ["apple", "pineapple", "banana", 111, true, "Hello"]
// console.log("fruits[1]",fruits[1]) // fruits[1] pineapple

//-------------------------------------
//  Y masuviv e property(Vlastuvist') taka yak 'length'. Vin povertae factuchny kilkist' elementiv masuvy.
// const fruits = ["apple", "pineapple", "banana", 111, true, "Hello"]
// console.log(fruits.length) //6
//------------------------------------

/// //////////
// const fruits = ["apple", "pineapple", "banana", 111, true, "Hello"]
// const arrayLength = fruits.length
// const lastElementIdx = arrayLength - 1 // -1 tomysho index na 1 menshe vid elementy masuva
// console.log(fruits[lastElementIdx]) // Hello

/// /////////// A mogna os' tak: - Tak krasche
// const fruits = ["apple", "pineapple", "banana", 111, true, "Hello"]
// console.log(fruits.length)
// console.log(fruits[fruits.length - 1]) // Hello

// Tak ne pracyue!
// console.log(fruits[-1]) // undefined.

//---------------------------------------
// Перевизначення елементів масиву:
// const fruits = ["apple", "pineapple", "banana"]
// console.log(fruits) // [ 'apple', 'pineapple', 'banana' ]
// // ---- Perenaznachaemo:
// fruits[1] = "lemon" // fruits[1] - tse pineapple
// console.log(fruits) // [ 'apple', 'lemon', 'banana' ]

// -----------------------------------------
//  Багатовимірні масиви.
// Масиви можуть містити елементи, які у свою чергу теж є масивами.
// Багатовимірні масиви можуть бути створені шляхом вкладення одного масиву всередину іншого.
// Кожен елемент зовнішнього масиву є вкладеним масивом.

const matrix = [
  ['banana', 'apple'],
  ['lemon', 'pineapple'],
];
console.log(matrix[0][1]); // [0] posulannya do pershogo masuvy - ["banana", "apple"].[1] - zvernenya do elementy - apple.
console.log(matrix[1][0]); // lemon

/// //////////////////////////////////

// const colors = ['red', 'green', 'blue'];
// console.log(colors[0]); // Виведе "red"
// console.log(colors[1]); // Виведе "green"
// console.log(colors[2]); // Виведе "blue"
