
///////////////////////
// function Person (name, age) {
//     this.name = name
//     this.age = age
// }
// const user1 = new Person('John', 23) // -- 'new' - klyuchove slovo
// console.log(user1) // - ne treba yaksho dodaemo novi ob'ectu
//
// // -------- za dopomogoy constructora mu mogem dobavlyatu bilshe obectiv
//
// const user2 = new Person('Alice', 23)
// console.log(user2) // abo console.log(user1, user2) i pruburaem console.log(user1)

/////////////////////////

/////////////////////////
// function Person (name, age) {
//     this.name = name
//     this.age = age
//     this.sayHello = function() {
//         console.log(`Hello, my name is ${this.name}.`)
//     }
// }
// const user1 = new Person('John', 23)
// user1.sayHello()
// const user2 = new Person('Alice', 21)
// user2.sayHello()
// ---ZAVDYAKU 'this' VUKONYETSYA POSULANNYA NA NOVOSTVORENNUY OB'EKT!!!
///////////////////////////

///////////////////////////
// function Person (name, age) {
//         this.name = name
//         this.age = age
//         this.sayHello = function() {
//             console.log(`Hello, my name is ${this.name}.`);
//         };
//     }
//
// const user1 = new Person("Peter", 23)
// console.log(user1)
// user1.sayHello()
// const user2 = new Person("Alice", 21)
// console.log(user2)
// user2.sayHello()

            // -- Vidpovid' v takomy vupadky:
// Person { name: 'Peter', age: 23, sayHello: [Function (anonymous)] }
// Hello, my name is Peter.
// Person { name: 'Alice', age: 21, sayHello: [Function (anonymous)] }
// Hello, my name is Alice.

// Vuvede vse sho poprosuv!

////////////////////////////////////