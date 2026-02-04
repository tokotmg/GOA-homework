//Truthy და Falsy ეხება იმას, თუ როგორ ფასდება არაბულური მნიშვნელობები ლოგიკურ კონტექსტში ისეთ ენებში, როგორიცაა JavaScript და Python.
//Ternary არის ლაკონური გზა მარტივი if...else ოპერატორების ერთ სტრიქონში დასაწერად.
let age = 20;
let text = (age < 18) ? "Minor" : "Adult";
console.log(text)
let number = -5
let answer = (number >= 0) ? "Positive" : "Negative";
console.log(answer)
function checkTemperature(temperature) {
    if (temperature < 15) {
        return 'cold';
    } else if (temperature >= 15 && temperature < 25) {
        return 'warm';
    } else {
        return 'hot';
    }
}
const temp1 = 10;
console.log(`Temperature ${temp1}°: ${checkTemperature(temp1)}`);
function findLargestWithTernary(num1, num2, num3) {
  return (num1 >= num2 && num1 >= num3) ? num1 : 
         (num2 >= num3) ? num2 : 
         num3;
}
const numberA = 50;
const numberB = 10;
const numberC = 30;
const largestTernary = findLargestWithTernary(numberA, numberB, numberC);
console.log(`The largest number is: ${largestTernary}`); 
const userName = "davit";
switch (userName) {
  case "davit":
    console.log("Hello, Davit! Welcome back.");
    break;
  case "nikolozi":
    console.log("Greetings, Nikolozi! It's good to see you.");
    break;
  case "vazha":
    console.log("Salutations, Vazha! We hope you have a great day.");
    break;
  default:
    console.log("Hello there! We don't have a specific greeting for you, " + userName + ".");
}
const vowel = "a";
switch(vowel) {
    case "a":
    console.log("It's a vowel.");
    break;
    case "e":
    console.log("It's a vowel.");
    break;
    case "i":
    console.log("It's a vowel.");
    break;
    case "o":
    console.log("It's a vowel.");
    break;
    case "u":
    console.log("It's a vowel.");
    break;
    default:
    console.log("It's not a vowel.");
}