
// const person = {
//     name: 'Alice',
//     greet: function () {
//         console.log(`Hello, ${this.name}!`)
//     }
// } //undeffined

const person = {
    name: 'Alice',
    greet: () => {
        console.log(`Hello, ${this.name}!`)
    }
}

