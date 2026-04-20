const person = {
  name: "Guga",
  age: 20,
  printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
  setAge(newAge) {
    this.age = newAge;
  }
};
person.printInfo();
person.setAge(30);
person.printInfo();
function Account(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.id = Date.now() + Math.floor(Math.random() * 1000);

  this.printInfo = function() {
    console.log(`Email: ${this.email}, Password: ${this.password}`);
  };
}
const user1 = new Account("dev_mindy", "mindy@example.com", "mypass123");
const user2 = new Account("js_guru", "guru@web.org", "secure456");
const user3 = new Account("coder_xtreme", "xtreme@tech.io", "hidden789")
console.log(user1);
console.log(user2);
console.log(user3);