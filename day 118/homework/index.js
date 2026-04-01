const numbers1 = [3, 10, 7, 20, 5];
const transformedNumbers = numbers1.map(num => {
  if (num > 10) {
    return num * 2; // Multiply by 2 if > 10
  } else {
    return num + 5; // Else add 5
  }
});
console.log(transformedNumbers)
const numbers2 = [12, 25, 7, 30, 18, 5];
const filteredNumbers = numbers2.filter(num => 
  num > 10 && (num % 2 === 0 || num % 5 === 0)
);
console.log(filteredNumbers);
const numbers3 = [1, 2, 3, 4, 5, 6];
const result = numbers3
  .map(n => n * n)
  .filter(n => n > 10);
console.log(result);
const numbers4 = [5, 17, 3, 9, 21];
const largestNumber = numbers4.reduce((accumulator, currentValue) => {
  if (currentValue > accumulator) {
    return currentValue;
  } else {
    return accumulator;
  }
}, numbers4[0]);
console.log("Max Number = " + largestNumber);
const words = ["Hello", "world", "this", "is", "JS"];
const result2 = words.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
})
console.log(result2);
const numbers5 = [4, 9, 16, 25, 36, 49];
const result3 = numbers5
  .filter(num => num % 2 === 0) 
  .map(num => Math.sqrt(num))
  .reduce((sum, current) => sum + current, 0);
console.log(result3); 

