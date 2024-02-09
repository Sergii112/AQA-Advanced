
// "Присвоєння за значенням". Примітиви (наприклад, числа, рядки, булі, null і undefined)
// копіюються за їхніми значеннями.
// let a = 2
// const b = a
// a = 5
//
// console.log("a", a) // a = 5
// console.log("b", b) // b = 2
// -------------------------------

// Присвоєння за посиланням:
// При присвоєнні за посиланням, замість копіювання значення, змінна отримує посилання на певний об'єкт або масив.
// Це означає, що якщо ми змінюємо дані в одній змінній, зміни відобразяться і в іншій,
// оскільки обидві змінні спрямовані на одну об'єктну структуру.

////////////////////////////////
// const fruits = ["apple", "pineapple", "banana"]
//
// const freshFruits = fruits
//
// console.log("freshFruits", freshFruits)
// console.log("fruits", fruits)
//     // Poverne:
//     // freshFruits [ 'apple', 'pineapple', 'banana' ]
//     // fruits [ 'apple', 'pineapple', 'banana' ]
//
// console.log("-----------------------") // tse prosto liniya
//
// fruits[0] = "raspberry" // naznachaemo noive znachennya [apple] --> [raspberry]
//
// console.log("fruits", fruits)
// console.log("freshFruits", freshFruits)
//    // Poverne:
//    // fruits [ 'raspberry', 'pineapple', 'banana' ]
//    // freshFruits [ 'raspberry', 'pineapple', 'banana' ]

////////////////////////////////////////

///////////////////////////////
// -- Function vuvode masuv fryktiv:

// const fruits = ["apple", "pineapple", "banana"]
// function printFruits(fruitsList) {
//     console.log() // fruits [ 'apple', 'pineapple', 'banana' ]
// }

// Klonyvannya (KOPIYUVANNYA)masuva cherez "structuredClone function".
const fruits = ["apple", "pineapple", "banana"]

function printFruits(fruitsList){
    const newArray = structuredClone(fruitsList)
    newArray[0] = "lemon"
    console.log("fruitsList", newArray)
}

console.log("fruits", fruits)

printFruits(fruits)

console.log("fruits", fruits)
// Poverne:
    //fruits [ 'apple', 'pineapple', 'banana' ]
    // fruitsList [ 'lemon', 'pineapple', 'banana' ] - klonovanuy i zminenuy.
    // fruits [ 'apple', 'pineapple', 'banana' ] - oruginal'nuy masuv. V cyomy i syt' "structuredClone function".