class Car {
    constructor(brand, speed, abilities) {
        this.brand = brand;
        this.speed = speed;
        this.abilities = abilities;
    }
    drive() {
        console.log(`The ${this.brand} car is moving at a speed of ${this.speed} km/h`);
    }
}
const myCar = new Car("Toyota", 120);
myCar.drive();
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height
    }
}
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.getArea());
class Student {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
    hasPassed() {
        return this.score >= 50
    }
}
const student1 = new Student("Davit", 75);
console.log(student1.name);
console.log(student1.score);
console.log(student1.hasPassed());
const student2 = new Student("Guga", 40);
console.log(student2.name);
console.log(student2.score);
console.log(student2.hasPassed());
class PiggyBank {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}
const myBank = new PiggyBank();
console.log(myBank.balance);
myBank.deposit(50);
console.log(myBank.balance);