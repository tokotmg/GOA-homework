//function express და function ორივე ქმნის ფუნქციის ობიექტებს, მაგრამ ისინი განსხვავდებიან სინტაქსით, სახელწოდებით და, რაც მთავარია, როდის არიან ისინი ხელმისაწვდომი გამოსაყენებლად ამწევი მექანიზმის გამო.
const calculatePower = (number, power = 2) => {
    return number ** power;
};
const result1 = calculatePower(3, 3);
console.log(`3 raised to the power of 3 is: ${result1}`);
const result2 = calculatePower(5);
console.log(`5 raised to the default power (2) is: ${result2}`);
function isEven(num) {
  return num % 2 === 0;
}
function checkNumber(num) {
  if (isEven(num)) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
checkNumber(4);
checkNumber(7);
const userInfo = function(name, city = "Tbilisi") {
  return `I am ${name} and live in ${city}`;
};
console.log(userInfo("John"));
console.log(userInfo("Alice", "London"));
const sayHello = function(name) {
    return "Hello, " + name + "! Welcome to coding.";
}
console.log(sayHello('Tornike'))

