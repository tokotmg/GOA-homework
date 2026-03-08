function calculateProduct() {
    let number;
    let product = 1;
    let i = 1;
    while (true) {
        let input = prompt("Enter a positive number:");
        if (input === null) {
            alert("Operation cancelled.");
            return; 
        }
        number = parseInt(input, 10);
        if (!isNaN(number) && number > 0) {
            break;
        } else {
            alert("Invalid input. Please enter a valid positive number.");
        }
    }
    while (i <= number) {
        product *= i; 
        i++; 
    }
    console.log(`The product of all numbers from 1 to ${number} is: ${product}`);
    alert(`The product of all numbers from 1 to ${number} is: ${product}`);
}
calculateProduct();
function getRandomNumberFromList(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.error("Input must be a non-empty array of numbers.");
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}
const myList = [10, 20, 30, 40, 50, 60];
const selectedNumber1 = getRandomNumberFromList(myList);
console.log(`Random number 1: ${selectedNumber1}`);
const selectedNumber2 = getRandomNumberFromList(myList);
console.log(`Random number 2: ${selectedNumber2}`);
//do...while ოპერატორების კომბინაცია განსაზღვრავს კოდის ბლოკს, რომელიც ერთხელ შესრულდება და განმეორდება მანამ, სანამ პირობა მართალია.
//break ოპერატორი გამოდის კომუტატორიდან ან ციკლიდან