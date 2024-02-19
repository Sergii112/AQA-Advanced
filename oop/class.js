// function Person(name, age){
//     this.name = name;
//     this.age = age + 1;
// }

class Person {
    color = "#eeefff"

    constructor(name, age) {
        this.name = name;
        this.age = age + 1;
        this.color = "black"
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const user = new Person("John",33)
console.log(user)
// const user2 = new Person("Alice",42)
//
// user.greet()
// user2.greet()