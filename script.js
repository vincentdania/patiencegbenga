const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (emailInput.value.trim() === '') {
        errorMessage.textContent = 'Email field cannot be empty';
    } else if (!isValidEmail(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address';
    } else {
        // Here you can handle form submission, for example, send data to server
        alert('Thank you! We will notify you soon.');
        emailInput.value = '';
        errorMessage.textContent = '';
    }
});

function isValidEmail(email) {
    // A simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
