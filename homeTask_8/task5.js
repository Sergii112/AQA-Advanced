
const users = [
    { name: 'Alice', email: 'alice@example.com', age: 25 },
    { name: 'Bob', email: 'bob@example.com', age: 30 },
    { name: 'Charlie', email: 'charlie@example.com', age: 35 }
];

for (const user of users) {
    console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
}
console.log("--------------------------")

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}

