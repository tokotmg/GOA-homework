const form = document.getElementById('myForm');
const input = document.getElementById('userInput');
const display = document.getElementById('displayText');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    display.textContent = input.value;
    input.value = '';
});
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('username');
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    localStorage.setItem('savedName', name);
    lert('Name saved to localStorage!');
    nameInput.value = '';
});
