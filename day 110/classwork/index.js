const userNumbers = []
for (let i = 0; i < 10; i++) {
    let userInput = prompt("Enter number " + (i + 1) + " of 10:");
    userNumbers.push(+userInput); 
}
console.log(userNumbers);
let myList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
myList.pop()
myList.splice(4, 1);
myList.splice(3, 1);
myList.shift()
console.log("Remaining elements:");
for (let i = 0; i < myList.length; i++) {
    console.log(myList[i]);
}
let numbers = [];
let sum = 0;
const amountOfNumbers = 5;
for (let i = 0; i < amountOfNumbers; i++) {
    let input = parseFloat(prompt(`Enter number ${i + 1}:`));
    if (!isNaN(input)) {
        numbers.push(input);
        sum += input;
    } else {
        alert("Invalid input. Please enter a valid number.");
        i--;
    }
}
let mean = sum / numbers.length;
console.log(`Mean: ${mean}`);
