
let person = {
    firstName: "John",
    lastName: "Smith",
    age: 40
};

person.email = "john.smith@example.com";

delete person.age;

console.log(person);