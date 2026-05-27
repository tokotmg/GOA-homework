function checkCharacters() {
    const input = document.getElementById('textInput').value;
    const feedback = document.getElementById('charFeedback');
    const minLength = 8;
    const remaining = minLength - input.length;

    if (remaining > 0) {
      feedback.textContent = remaining + " letters left!";
    } else {
      feedback.textContent = "Minimum reached!";
    }
  }
const inputField = document.getElementById('userInput');
const outputText = document.getElementById('output');
const deleteBtn = document.getElementById('deleteBtn');
window.onload = () => {
    const savedData = localStorage.getItem('userNote');
    if (savedData) {
        updateUI(savedData);
    }
};
function saveData() {
    const value = inputField.value;
    if (value) {
        localStorage.setItem('userNote', value);
        updateUI(value);
        inputField.value = ''; // Clear input field
    }
}
function clearData() {
    localStorage.removeItem('userNote');
    updateUI(null);
}
function updateUI(data) {
    if (data) {
        outputText.textContent = data;
        deleteBtn.style.display = 'block';
    } else {
        outputText.textContent = 'No data saved.';
        deleteBtn.style.display = 'none';
    }
}
