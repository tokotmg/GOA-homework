const welcomeText = document.getElementById('welcomeText');
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('userName');
const displayGreeting = (name) => {
    if (name) {
        welcomeText.textContent = `Welcome back, ${name}!`;
    }
};
const savedName = localStorage.getItem('user_name');
displayGreeting(savedName);
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputVal = nameInput.value;
    localStorage.setItem('user_name', inputVal);
    displayGreeting(inputVal);
    nameInput.value = '';
});