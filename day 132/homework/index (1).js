const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
function validatePasswords() {
  if (confirmPassword.value.length > 0) {
    if (password.value === confirmPassword.value) {
      confirmPassword.classList.remove('mismatch');
      confirmPassword.classList.add('match');
    } else {
      confirmPassword.classList.remove('match');
      confirmPassword.classList.add('mismatch');
    }
  } else {
    confirmPassword.classList.remove('match', 'mismatch');
  }
}
password.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);