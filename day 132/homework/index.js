document.getElementById('userForm').addEventListener('submit', function(event) {
    const userName = document.getElementById('userName').value;
    const errorDiv = document.getElementById('error-message'); 
    errorDiv.textContent = '';
    if (userName.trim() === "") {
        event.preventDefault(); // Block submission
        errorDiv.textContent = "Username cannot be empty.";
    } 
    else if (userName.length < 5 || userName.length > 15) {
        event.preventDefault(); // Block submission
        errorDiv.textContent = "Username must be between 5 and 15 characters.";
    }
});

