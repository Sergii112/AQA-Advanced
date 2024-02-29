// <Set> - це об'єкт, який представляє собою колекцію унікальних значень у вигляді набору (списку) значень.
// У <Set> кожне значення може зустрічатися тільки один раз, що робить його корисним для видалення
// дублікатів у масивах або перевірки наявності значень. <Set> є одним із типів вбудованих об'єктів у JavaScript.

// Створення Set:
// Для створення нового об'єкта типу Set можна використовувати конструктор Set() або створити його з
// ітерабельного об'єкта (наприклад, масиву) задопомогою Set(iterable) :
// ------------------------------------------------------------------------------------
//     const set = new Set(); // Порожній об'єкт Set
//     const setFromArray = new Set([1, 2, 3, 3, 4, 4, 5]) //Створення з масиву
// ------------------------------------------------------------------------------------

// const arr = [1, 2, 3, 3, 4, 4, 5]
// const setFromArray = new Set(arr);
// console.log(typeof  setFromArray)
// const uniqueArray = [...setFromArray] // set perevodum v masuv za dopomogoyui operatora <spread>
// console.log(uniqueArray)

// Perevevshu v masuv - mogna vukorustovyvatu metodu dostypni dlya masuvy //////// <set> ne dostypni metodu masuva//
