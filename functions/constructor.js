
function Person (name, age) {
    this.name = name
    this.age = age
}
const user1 = new Person('John', 23)
//console.log(user1) - ne treba yaksho dodaemo novi ob'ectu

// za dopomogoy constructora mu mogem dobavlyatu bilshe obectiv

user1.sayHello()
const user2 = new Person('Alice', 21)
//console.log(user2)
user2.sayHello() proebal. persmotret video!