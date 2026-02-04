function checkNumberSize() {
  const userInput = prompt("Please enter a number:");
  const number = Number(userInput);
  const size = number > 50 ? "big" : number > 25 ? "medium" : "small";
  console.log(size);
}
checkNumberSize();
let userInput = prompt("Please enter a number:");
let number = Number(userInput);
switch (true) {
    case (number >= 50):
        console.log("big");
        break;
    case (number <= 25):
        console.log("small");
        break;
    default:
        console.log("medium")
        break;
}
//Ternary არის ლაკონური გზა მარტივი if...else ოპერატორების ერთ სტრიქონში დასაწერად და switch ასრულებს კოდის ბლოკებს, რომლებიც შეესაბამება გამოსახულებას.
