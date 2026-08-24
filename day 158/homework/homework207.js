class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
  set fullName(name) {
    const parts = name.trim().split(/\s+/);
    this.firstName = parts[0] || '';
    this.lastName = parts.slice(1).join(' ') || '';
  }
}
const user = new User('Tornike', 'Begheluri');
console.log(user.fullName)
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }
  set fahrenheit(value) {
    this.celsius = ((value - 32) * 5) / 9;
  }
}
const temp = new Temperature(25);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);
class BankAccount {
  #balance;
  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }
  #validateAmount(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new TypeError("Amount must be a number.");
    }
    if (amount <= 0) {
      throw new RangeError("Amount must be greater than zero.");
    }
  }
  deposit(amount) {
    this.#validateAmount(amount); // Calls the private validation method
    this.#balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.#balance}`;
  }
  get balance() {
    return this.#balance;
  }
}
const myAccount = new BankAccount(100);
console.log(myAccount.deposit(50)); 
try {
  myAccount.deposit(-20); 
} catch (error) {
  console.error(error.message); 
}
class MathUtils {
  static triple(number) {
    return number * 3;
  }
}
console.log(MathUtils.triple(5));
class App {
  static #maxUsers = 100;
  static checkUserLimit(currentUsers) {
    return currentUsers > App.#maxUsers;
  }
}
console.log(App.checkUserLimit(50));
console.log(App.checkUserLimit(120));
