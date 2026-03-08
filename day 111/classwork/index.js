let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
let number = 10;
while (number >= 1) {
    console.log(number);
    number--;
}
let inputNumber;
do {
  inputNumber = Number(prompt("Enter a number (enter 0 to stop):"));
  if (isNaN(inputNumber)) {
    alert("Invalid input. Please enter a number.");
  } else if (inputNumber !== 0) {
    console.log(`You entered: ${inputNumber}`);
  }
} while (inputNumber !== 0 || isNaN(inputNumber)); 
console.log("0 was entered. The program has stopped.");
const table = document.getElementById('randomTable');
for (let r = 0; r < 4; r++) {
    let row = table.insertRow();
    for (let c = 0; c < 4; c++) {
        let cell = row.insertCell();
        cell.textContent = Math.random() < 0.5 ? '+' : '-';
    }
}