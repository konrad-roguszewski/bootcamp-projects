const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userRegistration();
    loginUser();
});

loginUser();

const logoutBtn = document.getElementById('sign-out-btn');
logoutBtn.addEventListener('click', logoutUser);

function userRegistration() {
    const userData = {
        email: document.getElementById('email-input').value,
        password: document.getElementById('password-input').value,
    };
    sessionStorage.setItem('UsersLogin', JSON.stringify(userData));
    // window.location.reload();
    console.log(`e-mail: ${userData.email}, hasło: ${userData.password}`);
};

function loginUser() {
  const loginEmail = document.getElementById('email-input').value;
  const loginPass = document.getElementById('password-input').value;

  const emailField = document.getElementById('user-email');
  const content = document.getElementById('content');

  if (sessionStorage.getItem('UsersLogin')) {
      const loginDeets = JSON.parse(sessionStorage.getItem('UsersLogin'));
      // console.log(loginDeets);
      if (loginEmail === loginDeets.email && loginPass === loginDeets.password) {
          // console.log('Login successful');

          loginForm.style.display = 'none';
          content.style = {};
          emailField.textContent = `Użytkownik ${loginDeets.email} został automatycznie zalogowany`;

      } else {
          // console.log('Wrong credentials');

          loginForm.style.display = 'none';
          content.style = {};
          emailField.textContent = `Użytkownik ${loginDeets.email} został automatycznie zalogowany`;
      }
  } else {
      // console.log('Not a registered user');

      content.style.display = 'none';
      loginForm.style = {};
      // emailField.textContent = 'No user';
  };
};

function logoutUser() {
  sessionStorage.removeItem('UsersLogin');
  window.location.reload();
};