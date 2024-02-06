
// -- Closures (Замикання) - це функції, які містять інші функції та зберігають доступ до змінних з батьківської функції,
// навіть після того, як батьківська функція завершила свою роботу.
// Замикання дозволяють створювати приватні змінні та методи, і забезпечують ізоляцію коду.

////////////////////////
// function makeCounter (startValue) {
//     let value = startValue
//     return function (){
//         console.log(value)
//         value ++
//     }
// }
//
// const count = makeCounter(1)
// count()
////////////////////



//////////////////////
// console.log("Hello")
// console.log("Hi")
// const a = 1 + 2
// console.log("A", a)
//
// count()
//////////////////////

///////////////////////////////////////////////////
//     function multiplier(factor) {
//         return function(x) {
//             return x * factor;
//         };
//     }
//
// const double = multiplier(2);
// console.log(double(5)); // Виведе 10
// console.log(double(7)); // Виведе 14
// console.log(double(86)); // Виведе 172
////////////////////////////////////////////////////

////////////////////
// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     };
// }
//
//     const make5times = multiplier(5);
//     console.log(make5times(5)); // Виведе 25
//     console.log(make5times(7)); // Виведе 35
////////////////////