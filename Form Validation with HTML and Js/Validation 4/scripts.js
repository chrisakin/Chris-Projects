
const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');
const submitButton = document.getElementById('submit-button');

confirmPassword.addEventListener('blur', () => {
 if (passwordInput.value === confirmPassword.value){
     passwordInput.style.border = 'thin solid green';
     confirmPassword.style.border = 'thein solid green';
     errorMsg.style.display = 'none';
     submitButton.removeAttribute('disabled');
 } else {
    passwordInput.style.border = 'thin solid red';
    confirmPassword.style.border = 'thein solid red';
    errorMsg.style.display = 'inline';
    submitButton.setAttribute('disabled', 'true');
 }
})