/// ///////////////////////
// const person = {
//     name: 'Alice',
//     greet: function () {
//         console.log(`Hello, ${this.name}!`) //'this' posulaetsya na ob'ekt 'person'.
//         // Faktuchno {this.name} tej same sho i {person.name}
//     }
// }
// person.greet()
/// /////////////////

/// ////////////////// 'this' ne pratsyue z strilochnumu funktsiyamu
// const person = {
//     name: 'Alice',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`)
//     }
// }
// person.greet() //TypeError: Cannot read properties of undefined (reading 'name')
/// /////////////////

/// /////////////////////
// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayHello () {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
//
// const person2 = {
//     name: 'Peter'
// }

// person.greet()                  //
// person.greet.call(person2)      // ---- Soft override context:
// person.greet()                  //

/// /////////////
// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayHello () {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
//
// const person2 = {
//     name: 'Peter'
// }
// person.greet.call(person2) // -- FUNCTION 'call' --
// person.greet()
/// /////////////////////

/// //////////////
// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayHello (greetingText) {
//         console.log(`${greetingText}, ${this.name}!`);
//     }
// };
//
// const person2 = {
//     name: 'John'
// }
// person.sayHello.apply(person2, ["Hello"]) // -- FUNCTION 'apply' --
// person.sayHello("Hi")
/// //////////////

/// ///////////////
// const person = {
//     name: 'Alice',
//     greet: function() {
//         console.log(`Hello, ${this.name}!`);
//     },
//     sayHello (greetingText) {
//         console.log(`${greetingText}, ${this.name}!`);
//     }
// };
//
// const person2 = {
//     name: 'John'
// }
// -- Hard override context --
//  1 variant:
// const greetFunction =  person.sayHello.bind(person2) // FUNCTION 'bind'.
// greetFunction()
// greetFunction("Hello")
// greetFunction("Hi")
// undefined, John!
// Hello, John!
// Hi, John!

//  2 variant:
// const greetFunction =  person.sayHello.bind(person2, ["YO!!!"]) // dobavum argyment 'YO!!!'
// greetFunction()
// greetFunction("Hello")
// greetFunction("Hi")
// YO!!!, John!
// YO!!!, John!
// YO!!!, John!
/// /////////////////////

/// //////////////////////////////
// const person = {
//     name: 'Alice',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
/// /////////////////////////////

/// ///////////////////////////
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  //  --- // Стрілочна функція не має власного контексту 'this', вона використовує контекст зовнішнього об'єкту 'person'

  printName() {
    console.log(this.fullName());
    setTimeout(() => {}, 1000);
    // console.log(this.fullName());
  },
};

person.printName(); // Виведе "John Doe" після затримки 1 секунда

/// //////////////////////////
