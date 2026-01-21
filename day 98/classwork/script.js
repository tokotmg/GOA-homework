const randomNumber = Math.floor(Math.random() * 10) + 1;
if (randomNumber % 2 === 0) {
  console.log(`The number ${randomNumber} is even.`);
} else {
  console.log(`The number ${randomNumber} is odd.`);
}
let age = 18
if (age < 13) {
    console.log("ბავშვი")
} 
else if (age >= 13 && age <= 17) {
    console.log("თინეიჯერი")
} 
else if (age > 17) {
    console.log("ზრდასრული")
}
let username = "admin"
let password = "1234"
if (username === "admin" && password === "1234") {

  console.log("Congratulations you won 1000 robux");
} else {

  console.log("Try again");
}