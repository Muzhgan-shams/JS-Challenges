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
