document.addEventListener('DOMContentLoaded', function() {
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const PasswordInput = document.getElementById('Password');
const mobileInput = document.getElementById('mobileno.');
if(localStorage.getItem('name')){
    nameInput.value = localStorage.getItem('name')
}
if(localStorage.getItem('email')){
    emailInput.value = localStorage.getItem('email')
}
});