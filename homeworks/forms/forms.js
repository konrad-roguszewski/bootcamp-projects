const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signUp();
});

function signUp() {
    const emailValue = document.getElementById('email-input').value;
    const passwordValue = document.getElementById('password-input').value;
    console.log(`e-mail: ${emailValue}, hasło: ${passwordValue}`);
};