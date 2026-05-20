document.getElementById('nameForm').addEventListener('submit', function(e) {
  const fName = document.getElementById('firstName').value;
  const lName = document.getElementById('lastName').value;
  const message = document.getElementById('message');
  const nameRegex = /^[A-Z][a-z]*$/;
  if (!nameRegex.test(fName) || !nameRegex.test(lName)) {
    e.preventDefault(); 
    message.textContent = "Names must start with an uppercase letter and contain no numbers or symbols.";
  } else {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
  }
});