//addEventListener() მეთოდი ელემენტს მოვლენის დამმუშავებელს ამაგრებს.
function toggleStatus() {
var textElement = document.getElementById("statusText");
if (textElement.innerText === "no") {
    textElement.innerText = "yes";
    } else {
        textElement.innerText = "no";
    }
}
const box = document.getElementById('colorBox');
const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
box.style.backgroundColor = randomColor;
});
const button = document.getElementById('hoverButton');
const paragraph = document.getElementById('nameParagraph');
const myName = "Tornike"; 
button.addEventListener('mouseover', function() {
    paragraph.textContent += myName + " ";
});
const numberDisplay = document.getElementById("number");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
let count = 0;
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});
decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});
function updateDisplay() {
  numberDisplay.textContent = count;
}