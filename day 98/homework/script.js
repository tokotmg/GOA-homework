function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number. Please use a number between 1 and 7.";
  }
}
const dayNumber = 4;
const dayName = getDayName(dayNumber);
console.log(`Day ${dayNumber} is ${dayName}`);
let score = 100
if (score > 90) {
    console.log("perfect")
} else if (score > 60 && score < 90) {
    console.log("decent")
} else {
    console.log("fired😡😡😡")
}
function isLeapYear(year) {0.
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
let year = 2024;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
let number1 = 2;
console.log(`The number ${number1} is: ${categorizeNumber(number1)}`)
function categorizeNumber(num) {
    let result;
    if (num === 0) {
        result = "0";
    } else if (num > 0) {
        if (num % 2 === 0) {
            result = "positive and even";
        } else {
            result = "positive and odd";
        }
    } else {
        result = "negative number";
    }
    return result;
}
let a = 10;
let b = 25;
let c = 15;
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return "a is the largest (or tied for the largest). Value: " + a;
  } else if (b >= a && b >= c) {
    return "b is the largest (or tied for the largest). Value: " + b;
  } else {
    return "c is the largest (or tied for the largest). Value: " + c;
  }
}
let result = findLargest(a, b, c);
console.log(result);

