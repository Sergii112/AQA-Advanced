// --------------- slice
// Метод slice() без аргументів створює поверхневу копію масиву.
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = originalArray.slice();

// ----------------- concat
// Використовуючи метод concat() : Метод concat() також створює копію масиву
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [].concat(originalArray);
// const copiedArray = originalArray.concat([]);

// ------------------ spread
// За допомогою оператора Spread ( ... ): Оператор Spread розгортає масив, створюючи його копію.
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [...originalArray];

// ------------------- array from
// За допомогою методу Array.from() : Метод Array.from() створює копію масиву
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = Array.from(originalArray);

// Усі ці методи створюють поверхневі копії масивів. Якщо масив містить об'єкти чи інші змінні об'єктного типу,
// вони будуть посилатися на ті ж об'єкти у пам'яті. Для глибокого копіювання, коли потрібно також створити
// копії об'єктів, необхідно використовувати функцію <sruturedClone> чи бібліотеки,
// які надають інструменти для глибокого копіювання структур даних.

// ---------------- structured clone ---- // Samuy krashiy. Yzay yogo!!!
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = structuredClone(originalArray);

// ----------------- json -------- Vukorustovyvalu kolus'
// const originalArray = [1, 2, 3, 4, 5];
// const copy = JSON.parse(JSON.stringify(originalArray))
// console.log(copy) // [ 1, 2, 3, 4, 5 ]
