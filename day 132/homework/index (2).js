document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('emailError').textContent = '';
            document.getElementById('ageError').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('formFeedback').textContent = '';
            const email = document.getElementById('email').value.trim();
            const age = document.getElementById('age').value.trim();
            const phone = document.getElementById('phone').value.trim();
            let isValid = true;
            if (!email.includes('@') || !email.includes('.')) {
                document.getElementById('emailError').textContent = 'Email must contain both an "@" symbol and a period (.)';
                isValid = false;
            }
            const ageNum = parseInt(age, 10);
            if (isNaN(ageNum) || ageNum <= 18) {
                document.getElementById('ageError').textContent = 'Age must be a number strictly greater than 18.';
                isValid = false;
            }
            const phoneRegex = /^5\d*$/;
            if (!phoneRegex.test(phone)) {
                document.getElementById('phoneError').textContent = 'Phone must contain only numbers and start with the digit 5.';
                isValid = false;
            }
            if (isValid) {
                document.getElementById('formFeedback').textContent = 'Form submitted successfully!';
            }
        });