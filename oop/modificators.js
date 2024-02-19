// class Student {
//     constructor(name) {
//         this.name = name; // Публічна властивість
//     }
//
//     // Публічний метод
//     introduce() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
//
// const student = new Student("Alice");
//
// console.log(student.name); // Alice
// student.introduce(); // Hello, my name is Alice

// PROTECTED
// class BankAccount {
//     constructor(balance) {
//         this._balance = balance; // Захищена властивість
//     }
//
//     // Захищений метод
//     _getBalance() {
//         return this._balance;
//     }
//
//     printBalance(){
//         console.log(`Your account balance is ${this._balance} UAH`)
//     }
//
//     withdraw(amount){
//         this._balance -= amount
//     }
// }
//
// const acc = new BankAccount(100)
//
// console.log(acc._balance)
//
// acc.printBalance()
// acc.withdraw(15)
// acc.printBalance()


// PRIVATE
//
// class BankAccount {
//     #balance
//     constructor(balance) {
//         this.bankName = "Hillel"
//         this.#balance = balance; // Private властивість
//     }
//
//     // Private метод
//     #getBalance() {
//         return this.#balance;
//     }
//
//     printBalance(){
//         console.log(`Your account balance is ${this.#balance} UAH`)
//     }
//
//     withdraw(amount){
//         this.#balance -= amount
//     }
// }
//
// class EBanKAccount extends BankAccount {
//     constructor(balance) {
//         super(balance);
//     }
//
//     printEBalance() {
//         console.log(`Your account balance is ${this.#balance} UAH`)
//     }
// }
//
// const ebankAcc = new EBanKAccount(100)
// ebankAcc.printEBalance()

// const acc = new BankAccount(11)
// acc.printBalance()
// console.log(acc.#balance)