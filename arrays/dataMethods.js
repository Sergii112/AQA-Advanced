
// -- Вбудовані методи роботи з масивами: ----



// ---- Метод forEach дозволяє виконати задану функцію для кожного елементу масиву без створення нового масиву. ------
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((element, index)=>{
//     console.log("Index", index)
//     console.log(element * 2)
// });


// ------ Метод filter створює новий масив з елементами, які задовольняють певну умову ------
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((el, index)=> el % 2 === 0);
// console.log(evenNumbers)

// ---- Метод map створює новий масив, який є копією вихідного масиву та застосовує
// переданий колбек для кожного з елементів нового масиву.

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((el)=> Math.pow(el, 2));
// console.log(doubledNumbers)

// ----- Метод <sort> сортує елементи масиву на місці згідно з певним порядком за допомогою стрілочної функції.
// --- Yavlyaetsya mytyyuchum - vin zminyue pochatkovuy masuv

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort((a, b) => a.localeCompare(b))
// console.log(fruits) // [ 'apple', 'banana', 'grape', 'orange' ]

// const arr = [2, 8,1, 10,98,76]
// arr.sort((a, b) => b - a) // a i b tse znachennya na kogniyu iteracii.
//                                                       // 2 i 8; 1 i 10; 98 i 76
// console.log(arr) // [ 98, 76, 10, 8, 2, 1 ]

// -------- Метод <reduce> застосовує задану стрілочну функцію до аккумулятора та кожного елементу масиву,
// результатом є одне значення.
// Аккумулятор - це змінна яка зберігається між всіма ітераціями.

    // <reduce> приймає 2 параметри:
// 1. Колбек який буде виконано для кожного елемента
// 2. Початкове значення аккумулятора (необов’язковий параметер)

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, item) => acc + item, 5)
// console.log(sum) // poverne 20

// ----- Метод <reverse> змінює порядок елементів масиву на протилежний.
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.reverse()) // [ 5, 4, 3, 2, 1 ]

// --- Метод <every> перевіряє, чи всі елементи масиву задовольняють певну умову і повертає булеве значення.
// const users = ["John", "Jane", "Jimmy"]
// const allNames = users.every((name) => name === "Jimmy")
// console.log(hasJimmy)

// Метод <some> перевіряє, чи хоча б один елемент масиву задовольняє певну умову і повертає булеве значення.
// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0); // povertae boolian

