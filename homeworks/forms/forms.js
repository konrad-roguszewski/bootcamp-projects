const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
const loginDiv = document.getElementById('login-panel');
const signUpBtn = document.getElementById('sign-up-button');
const emailSpan = document.getElementById('user-email');
const contentDiv = document.getElementById('content');
const logoutBtn = document.getElementById('sign-out-btn');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  loginUser();
});

signUpBtn.addEventListener('click', function() {
  checkRegistrationStatus();
});

logoutBtn.addEventListener('click', logoutUser);

function setCurrentUser(email) {
    sessionStorage.setItem('CurrentUser', JSON.stringify(email));
};

function registerUser(email, password) {
  let storedUsers = localStorage.UsersLogin ? JSON.parse(localStorage.UsersLogin) : [];
  if (email !== '' && password !== '') {
      const userData = {
          email,
          password,
      };
      storedUsers.push(userData);
      localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
  };
};

function checkRegistrationStatus() {
  const loginEmail = emailInput.value;
  const loginPass = passInput.value;
  if (localStorage.getItem('UsersLogin')) {
      const allStoredUsers = JSON.parse(localStorage.getItem('UsersLogin'));
      const matchedUser = allStoredUsers.filter(user => {
          return loginEmail === user.email;
      })
      if (matchedUser.length) {
          window.alert('Takie konto już istnieje');
      } else {
          registerUser(loginEmail, loginPass);
          if (loginEmail === ''){
              window.alert('Wrong input');
          } else {
              window.alert('New user registered');
          }
      }
  } else {
      registerUser(loginEmail, loginPass);
      if (loginEmail === ''){
          window.alert('Wrong input');
      } else {
          window.alert('First user registered');
      }
  };
  window.location.reload();
};

function loginUser() {
  const loginEmail = emailInput.value;
  const loginPass = passInput.value;
  if (localStorage.getItem('UsersLogin')) {
      const allStoredUsers = JSON.parse(localStorage.getItem('UsersLogin'));
      const matchedUser = allStoredUsers.filter(user => {
          return loginEmail === user.email && loginPass === user.password;
      })
      if (matchedUser.length) {
          setCurrentUser(loginEmail);
          window.alert('Login successful');
      } else {
          window.alert('Wrong credentials');
      }
  } else {
      window.alert('Not a registered user');
  };
  window.location.reload();
};

function checkUserStatus() {
  const reference = JSON.parse(sessionStorage.getItem('CurrentUser'));
  if (reference) {
      renderUserContent(reference)
  } else {
      renderForm()
  };
};

function renderForm() {
  content.style.display = 'none';
  loginDiv.style = {};      
};

function renderUserContent(email) {
  loginDiv.style.display = 'none';
  contentDiv.style = {};
  emailSpan.textContent = `Użytkownik ${email} został automatycznie zalogowany`;
};

function logoutUser() {
  sessionStorage.removeItem('CurrentUser');
  window.location.reload();
};

checkUserStatus();

// >>> NOTES <<<

const noteForm = document.getElementById('note-form');  
const noteInput = document.getElementById('note-input');
const noteList = document.getElementById('note-list');

let notes = [];

noteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addNote(noteInput.value);
});

function addNote(item) {
  const reference = JSON.parse(sessionStorage.getItem('CurrentUser'));
  if (item !== '') {
      const note = {
          id: Date.now(),
          name: item,
          author: reference,
      };
      notes.push(note);
      const sortedNotes = notes.slice().sort((a, b) => b.id - a.id);
      addNotesToLocalStorage(sortedNotes);
      noteInput.value = '';
  };
};

function renderNotes(notes) {
  const reference = JSON.parse(sessionStorage.getItem('CurrentUser'));
  noteList.innerText = '';
  notes.forEach(function(item) {
      if (item.author === reference){
          const li = document.createElement('li');
          li.innerText = `${item.name}`;
          noteList.append(li);
      };
  });
};

function addNotesToLocalStorage(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes);
};

function getNotesFromLocalStorage() {
  const reference = localStorage.getItem('notes');
  if (reference) {
      notes = JSON.parse(reference);
      const sortedNotes = notes.slice().sort((a, b) => b.id - a.id);
      renderNotes(sortedNotes);
  };
};

getNotesFromLocalStorage();