const userForm = document.getElementById('userForm');
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value
  };
  console.log('Form Data:', formData);
  localStorage.setItem('userData', JSON.stringify(formData));
  alert('Data saved to console and localStorage!');
});
