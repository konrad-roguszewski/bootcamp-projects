const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

const emailSpan = document.getElementById('user-email');
const contentDiv = document.getElementById('content');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  loginAndRegisterUser();
});

function setCurrentUser(email) {
  sessionStorage.setItem('CurrentUser', JSON.stringify(email));
};

function registerUser(email, password) {
  let storedUsers = localStorage.UsersLogin ? JSON.parse(localStorage.UsersLogin) : [];
  const userData = {
      email,
      password,
  };
  storedUsers.push(userData);
  localStorage.setItem('UsersLogin', JSON.stringify(storedUsers));
};

function loginAndRegisterUser() {
  const loginEmail = document.getElementById('email-input').value
  const loginPass = document.getElementById('password-input').value
  if (localStorage.getItem('UsersLogin')) {
      const allStoredUsers = JSON.parse(localStorage.getItem('UsersLogin'));
      const matchedUser = allStoredUsers.filter(user => {
          return loginEmail === user.email && loginPass === user.password;
      })
      if (matchedUser.length) {
        // window.alert('Login successful');
        setCurrentUser(loginEmail);
    } else {
        // window.alert('Wrong credentials or new user');
        registerUser(loginEmail, loginPass);
        setCurrentUser(loginEmail);
    }
  } else {
    // window.alert('Not a registered user');
    registerUser(loginEmail, loginPass);
    setCurrentUser(loginEmail);
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

checkUserStatus();

function renderForm() {
  content.style.display = 'none';
  loginForm.style = {};
};

function renderUserContent(email) {
  loginForm.style.display = 'none';
  contentDiv.style = {};
  emailSpan.textContent = `Użytkownik ${email} został automatycznie zalogowany`;
};

const logoutBtn = document.getElementById('sign-out-btn');
logoutBtn.addEventListener('click', logoutUser);

function logoutUser() {
    sessionStorage.removeItem('CurrentUser');
    window.location.reload();
};

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