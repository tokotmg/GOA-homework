const numbers1 = [3, 7, 10, 15, 2];
const firstEvenIndex = numbers1.findIndex(number => number % 2 === 0);
console.log(firstEvenIndex)
const words = ["cat", "dog", "elephant", "bee"];
const index = words.findIndex(word => word.length > 5);
console.log(index); 
colors = ["red", "blue", "green", "blue"];
const firstBlue = colors.indexOf("blue");
const yellowIndex = colors.indexOf("yellow");
console.log(firstBlue);
console.log(yellowIndex);
const numbers2 = [2, 4, 6, 8];
const product = numbers2.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1); 
console.log(product)
const nums = [5, 10, 15, 10, 20];
console.log(nums.indexOf(10));
console.log(nums.findIndex(num => num > 12));
console.log(nums.reduce((acc, curr) => acc + curr, 0));
const bonusNums = [1, 2, 2, 3, 3, 3];
const count = bonusNums.reduce((accumulator, currentValue) => {
  return accumulator + 1;
}, 0);
console.log(count)