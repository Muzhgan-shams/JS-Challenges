// OOP
// Classes(Blueprints)
// Defines the destructure and behaveior of Objects

class Student {
  constructor(name, age) {
    this.name = name; // instance property
    this.age = age;
  }

  displayInfo() {
    // method
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const student1 = new Student("Muzhgan", 2);
student1.displayInfo();

// Objects(Instances)
// Objects are created from classes and hold unique values.
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says woof!`);
  }
}

const myDog = new Dog("The dog", "Husky");
myDog.bark();

// Encapsulation - wrap data and methods, restricting direct access
// Here, #balamce is hidden from outside access.
class Account {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.deposit(100);
console.log(acc.getBalance());

// Inheritance - Allows one class to extend another
class Animal {
  speak() {
    console.log("Some sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

const kitty = new Cat();
kitty.speak(); // Meow!

// Polymorphism - Different classes can define the same method differently

class Bird {
  sound() {
    console.log("Chirp");
  }
}
class Dog2 {
  sound() {
    console.log("Woof");
  }
}

const animals = [new Bird(), new Dog2()];
animals.forEach((a) => a.sound()); // Chirp, Woof

// Abstraction - Hide complexity and expose only essentials.

// User doesn’t need to know how water is managed internally.

class CoffeeMachine {
  #water = 100;

  makeEspresso() {
    this.#water -= 50;
    console.log("Espresso ready!");
  }
}

const cm = new CoffeeMachine();
cm.makeEspresso(); // Espresso ready!
