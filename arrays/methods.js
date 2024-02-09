

// ------------------ split ------------------
    // Метод split() дозволяє розділити рядок на масив підрядків за вказаним роздільником.

// const sentence = "Це речення має кілька слів";
// const words = sentence.split(" ");
// console.log(words); // ["Це", "речення", "має", "кілька", "слів"]

// ------------------- join ------
    // Метод join() об'єднує всі елементи масиву в один рядок за допомогою вказаного роздільника.

// const sentence = "Це речення має кілька слів";
// const words = sentence.split(" ");
// console.log(words); // ["Це", "речення", "має", "кілька", "слів"]
// console.log(words.join("")) // Цереченнямаєкількаслів

// ------------------- indexOf ---------
    // Метод indexOf() повертає індекс першого входження вказаного елемента у масиві.
    // Якщо елемент не знайдено, повертається -1.

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(400)) // -1

// ----------------- includes ---------------
    // Метод includes() перевіряє, чи містить масив вказаний елемент.
    // Він повертає true , якщо елемент є у масиві, і false , якщо ні.

// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("green");
// console.log(hasGreen); // false

// ----------------- push
    // Метод push() додає один або кілька елементів в кінець масиву.

// const stack = [1, 2];
// stack.push("hello", "JS!!!!")
// console.log(stack) // [ 1, 2, 'hello', 'JS!!!!' ]


// ----------------- pop
    // Метод pop() видаляє останній елемент з масиву і повертає його значення.
// const stack = [1, 2, 3, 4];
// const poppedValue = stack.pop();
// console.log(poppedValue); // 4
// console.log(stack); // [1, 2, 3]

// ----------------- shift
    // Метод shift() видаляє перший елемент з масиву і повертає його значення.
// const queue = ["A", "B", "C"];
// const shiftedValue = queue.shift();
// console.log(shiftedValue); // "A"
// console.log(queue); // ["B", "C"]

// ------------------ unshift
    // Метод unshift() додає один або кілька елементів на початок масиву.
// const queue = ["B", "C"];
// const newLength = queue.unshift("A", "a");
// console.log(newLength)
// console.log(queue); // ["A", "a", "B", "C"]

// -------------------- slice
//     // Метод slice() створює новий масив, який включає елементи від вказаного індексу (включно) до кінця масиву
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.slice(1)
// console.log("numbers", numbers) // numbers [ 1, 2, 3, 4, 5 ]
// console.log("newNumbers", newNumbers) // newNumbers [ 2, 3, 4, 5 ]

    // або до вказаного індексу, не включно
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.slice(1, 3)
// console.log("numbers", numbers) // numbers [ 1, 2, 3, 4, 5 ]
// console.log("newNumbers", newNumbers) //newNumbers [ 2, 3 ]. '4' ne vuvela, tomysho 'до вказаного індексу, не включно'

// Yakso ne vkazatu argymentiv - vin skopiyue massuv povnistyu

// ------------------------------ splice
    // Метод splice() є інструментом для внесення змін у масиви, включаючи додавання та видалення елементів.

    // 1. Додавання елементів
// Метод splice() може додавати нові елементи до масиву. Щоб це зробити, вам потрібно вказати початковий індекс,
// за яким потрібно вставити нові елементи, а також кількість елементів, які слід видалити (в даному випадку 0),
// і самі елементи, які ви хочете додати.

// const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 0,  "жовтий", "рожевий")
// console.log(colors) // [ 'червоний', 'жовтий', 'рожевий', 'зелений', 'синій' ]

// const colors = ["червоний", "зелений", "синій", "жовтий"];
// colors.splice(1, 2)
// console.log(colors) // [ 'червоний', 'жовтий' ]

// const colors = ["червоний", "зелений", "синій", "жовтий"];
// colors.splice(1, 2, "pink", "blue")
// console.log(colors) // [ 'червоний', 'pink', 'blue', 'жовтий' ]

// ---------------------- concat
    // Метод concat() об'єднує два або більше масиви, створюючи новий масив.
// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // [1, 2, 3, 4]
