const numbers1 = [3, 10, 15, 20, 7, 8];
const result = numbers1
  .filter(num => num % 2 === 0)
  .map(num => num * 3);
console.log(result);
const names1 = ["nino", "giorgi", "ana", "luka"];
const formattedArray = names1.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
console.log(formattedArray);
const users1 = [
  { name: "Gio", age: 17 },
  { name: "Nika", age: 21 },
  { name: "Luka", age: 15 }
];
const eighteenYearOldNames = users1
  .filter(user => user.age >= 18)
  .map(user => user.name);
console.log(eighteenYearOldNames);
const numbers2 = [10, 20, 30, 40];
const average = numbers2.reduce((a, b) => a + b, 0) / numbers2.length;
console.log(average);
const words1 = ["apple", "kiwi", "banana", "fig", "orange"];
const filteredWords = words1.filter(word => word.length > 4);
console.log(filteredWords);
const products = [
  { name: "Book", price: 20 },
  { name: "Pen", price: 5 },
  { name: "Laptop", price: 1000 }
];
const updatedProducts = products.map(product => {
  return {
    ...product,
    price: product.price * 1.10
  };
});
console.log(updatedProducts);
const sentences = ["hello world", "javascript is fun"];
const upperCasedWords = sentences.map(word => word.toUpperCase());
console.log(upperCasedWords)
const items = ["a", "b", "c"];
['a', 'b', 'c'].forEach((value, index) => {
  console.log(`${index}: ${value}`);
});
const numbers3 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers3)];
console.log(uniqueNumbers);
const users2 = [
  { name: "Gio", score: 80 },
  { name: "Nika", score: 45 },
  { name: "Luka", score: 90 }
];
const result2 = users2
  .filter(item => item.score > 50)
  .map(item => ({ ...item, passed: true }));
console.log(result2)