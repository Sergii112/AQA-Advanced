const person = {
    name: "John",
    age: 30,
    gender: "male"
}

// treba vuvestu name i age. Mognan tak
// const name = person.name
// const age = person.age

// a mogna tak. Use destructuring:
const {name, age, gender = "unknown"} = person

console.log(name)
console.log(age)
console.log(gender)
