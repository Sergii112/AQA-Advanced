// ---------------- Imperatuvnuy pidhid programyvannya -----
// Імперативне програмування - це підхід, при якому програміст описує кроки,
// які комп'ютер повинен виконати для досягнення певної мети. У цьому підході важливо контролювати
// послідовність виконання дій.

// Potribno obchuslutu symy znachen'c v masuvi:

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
//
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
//
// console.log(sum)

///////////////////////////////////

// ----------- Declaratuvnuy pidhid programyvannya ----- I variant.
// Декларативне програмування - це підхід, при якому програміст описує, що має бути зроблено,
// а не як саме це має бути зроблено. У цьому підході важливо описати логіку завдання,
// а не контролювати кожну деталь виконання.

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
//
// for (const num of numbers) {
//     sum += num
// }
// console.log(sum)

//////////////////////
// ---------------------- Declaratuvnuy pidhid programyvannya ----- II variant (Vukorustovyem metod <reduce> ).
// Метод <reduce> застосовує задану стрілочну функцію до аккумулятора та кожного елементу масиву,
// результатом є одне значення.
// Аккумулятор - це змінна яка зберігається між всіма ітераціями.
//  <reduce> приймає 2 параметри:
//      1. Колбек який буде виконано для кожного елемента
//      2. Початкове значення аккумулятора (необов’язковий параметер)

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num)=> acc + num)
console.log(sum)
