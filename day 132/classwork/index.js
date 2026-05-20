//preventDefault() მეთოდი აუქმებს მოვლენას, თუ ის გაუქმებადია, რაც ნიშნავს, რომ მოვლენას მიკუთვნებული ნაგულისხმევი მოქმედება არ განხორციელდება.
const form = document.getElementById('userForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  const phone = document.getElementById('phone').value;
  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const ageError = document.getElementById('ageError');
  const phoneError = document.getElementById('phoneError');
  usernameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  ageError.textContent = '';
  phoneError.textContent = '';
  let isValid = true;
  if (username.length <= 3) {
    usernameError.textContent = 'Name must be more than 3 letters';
    isValid = false;
  }
  if (!email.includes('@')) {
    emailError.textContent = 'Email must contain @';
    isValid = false;
  }
  if (password.length < 8) {
    passwordError.textContent = 'Password must have at least 8 characters';
    isValid = false;
  }
  if (!age || Number(age) <= 0) {
    ageError.textContent = 'Please enter a valid age';
    isValid = false;
  }
  if (phone.trim() === '') {
    phoneError.textContent = 'Phone number field must not be empty';
    isValid = false;
  }
  if (isValid) {
    console.log("Form submitted successfully");
    alert("Form submitted successfully! Check console.");
    form.reset();
  }
});