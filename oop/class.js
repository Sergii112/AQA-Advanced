
// Клас є шаблоном або описом для створення об'єктів. Він визначає структуру та поведінку об'єкта.
// Класи можуть мати властивості (часто називають полями) та методи (функції, пов'язані з класом).
// Клас визначає, які дані може містити об'єкт, та які дії можуть бути виконані над об'єктом.


// function Person(name, age){
//     this.name = name;
//     this.age = age + 1;
// }
// - zamist' tsyogo  vukorustovyem 'class'

class Person {
    color = "#eeefff"

    constructor(name, age) {
        this.name = name;
        this.age = age + 1;
        this.color = "black"
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old, ${this.color}`);
    }
}

const user = new Person("John",33)
//console.log(user)
const user2 = new Person("Alice",42)

user.greet()
user2.greet()