const numbers1 = [2, 4, 6, 8, 10];
numbers1.forEach(number => console.log(number))
console.log(numbers1)
const numbers2 = [1, 2, 3, 4];
const duplicatedArray = numbers2.flatMap(item => [item, item]);
console.log(duplicatedArray);
const numbers3 = [5, 12, 8, 130, 44];
const filteredNumbers = numbers3.filter(num => num > 10);
console.log(filteredNumbers);
const names = ["Nino", "Giorgi", "Ana"];
names.forEach(name => {
  console.log(`Hello, ${name}`);
});
const prices = [10, 20, 30];
const updatedprices = prices.map((item => item + 5))
console.log(updatedprices)
const numbers4 = [3, 7, 2, 9, 12];
const evennumbers = numbers4.filter(num => num % 2 == 0)
console.log(evennumbers)
const words = ["apple", "banana", "kiwi"];
const wordLengths = words.map(word => word.length);
console.log(wordLengths); 
const users = ["Gio", "Nika", "Luka"];
users.forEach(user => {
  console.log(user.toUpperCase());
});
console.log(users)
const numbers5 = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbers5.filter(number => number % 2 !== 0);
console.log(oddNumbers)