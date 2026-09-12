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

// JavaScript is Prototype‑Based (Classes Are Syntax Sugar)
function Animal1(name) {
  this.name = name;
}

Animal1.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal1("Rayne");
dog.speak(); // Rayne makes a sound

// Static methods and properties belong to the class itself, not the instances.

// Instances cannot access static methods.
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5

// Private Fields & Methods
// Anything with # is not accessible outside the class.

class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  #log() {
    console.log("Balance updated");
  }
}

// Getters and Setters (Encapsulation)
// Controls how properties are read and written

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length < 3) throw new Error("Too short");
    this._name = value;
  }
}

const u = new User("Muzhgan");
console.log(u.name); // MUZHGAN

// Method Overriding (Polymorphism)
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  area() {
    return Math.PI * this.r * this.r;
  }
}

// Composition (Often Better Than Inheritance)
const canWalk = {
  walk() {
    console.log("Walking");
  },
};

const canEat = {
  eat() {
    console.log("Eating");
  },
};

function createPerson(name) {
  return {
    name,
    ...canWalk,
    ...canEat,
  };
}

const p = createPerson("Ali");
p.walk();
p.eat();

//Mixins (Multiple Inheritance Alternative)
const sayHi = {
  hi() {
    console.log("Hi");
  },
};

class Person {}

Object.assign(Person.prototype, sayHi);

const l = new Person();
l.hi();

// Class Fields (Public)
class Car {
  model = "Toyota"; // public field
}

// OOP + Closure
function Counter() {
  let count = 0;

  this.increment = function () {
    count++;
    console.log(count);
  };
}

const c = new Counter();
c.increment();

// OOP + Modules
export class User1 {
  constructor(name) {
    this.name = name;
  }
}

// OOP + Async
class API {
  async getData() {
    const res = await fetch("https://api.example.com");
    return res.json();
  }
}

// JavaScript doesn’t support multiple inheritance, but we can use mixins or composition to combine behaviors:

const canFly = {
  fly() {
    console.log("Flying");
  },
};
const canSwim = {
  swim() {
    console.log("Swimming");
  },
};

class Duck {}
Object.assign(Duck.prototype, canFly, canSwim);

const d = new Duck();
d.fly();
d.swim();

// Encapsulation with Closures
// Before private fields (#), use closures to hide data:
function Counter1() {
  let count = 0;
  this.increment = () => ++count;
  this.getCount = () => count;
}

const w = new Counter1();
console.log(w.increment());
console.log(w.getCount());

// Classes are also used with modules for a clean architechture
