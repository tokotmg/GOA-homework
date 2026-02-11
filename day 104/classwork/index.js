const isEven = function(number) {
  return number % 2 === 0;
};
console.log(isEven(2))
console.log(isEven(3))
function greetUser(name = "Guest") {
  return "Hello " + name;
}
let greetingWithName = greetUser("Aleqsandre");
console.log(greetingWithName);
let greetingAsGuest = greetUser();
console.log(greetingAsGuest)
const toCelsius = (fahrenheit = 0) => {
  return (fahrenheit - 32) * 5 / 9;
};
const main = () => {
  const fValue = 100;
  const celsius = toCelsius(fValue);
  return celsius;
};
console.log(main());