const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signUp();
    handleAuthStateChanged();
});

function signUp() {
    const emailValue = document.getElementById('email-input').value;
    const passwordValue = document.getElementById('password-input').value;
    console.log(`e-mail: ${emailValue}, hasło: ${passwordValue}`);
};

function handleAuthStateChanged() {
  const emailField = document.getElementById('user-email');
  const content = document.getElementById('content');
  const emailValue = document.getElementById('email-input').value;
  loginForm.style.display = 'none';
  content.style = {};
  emailField.textContent = `Użytkownik ${emailValue} został automatycznie zalogowany`;
};