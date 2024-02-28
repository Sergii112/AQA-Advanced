// // Створення об'єкта "прототипу"
// const animalPrototype = {
//     speak() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// };
//
// // Створення об'єкта, який успадковує прототип
// const dog = {
//     name: "Dog",
//     sound: "Woof",
//     speak() {
//         console.log(`Speaking from dog object: ${this.name} says ${this.sound}`);
//     }
// };
// dog.__proto__ = animalPrototype;
//
// // Виклик методу від успадкованого прототипу
// dog.speak(); // Dog says Woof

// // class
// class Animal {
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;
//     }
//
//     speak() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }
//
// class Dog extends Animal {
//     constructor(name) {
//         super(name, "Woof");
//     }
// }
//
// const dog = new Dog("Dog");
// console.log(dog.hasOwnProperty("name"))
// dog.speak(); // Dog says Woof

// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//
//     draw() {
//         console.log(`Drawing a shape with ${this.color} color.`);
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }
//
//     printInfo() {
//         console.log(`INFO: Radius : ${this.radius}, color: ${this.color}`);
//     }

// draw() {
//     // super.draw()
//     // console.log(`Drawing a circle with ${this.color} color and radius ${this.radius}.`);
// }
// }

// const circle = new Circle('blue', 5);
// circle.draw()

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'Meow');
    this.color = 'black';
  }
}

const cat = new Cat('Tom');
cat.speak();

class WildCat extends Cat {
  constructor(name) {
    super(name);
    // this.sound = "Hrrrrr"
  }

  speak() {
    console.log(`${this.name} says Hrrrrr`);
  }
}

const panther = new WildCat('Bahira');
panther.speak();

// class Dog extends Animal {
//     constructor(name) {
//         super(name, "Woof");
//     }
// }
//
// const dog = new Dog("Duke")
// dog.speak()
