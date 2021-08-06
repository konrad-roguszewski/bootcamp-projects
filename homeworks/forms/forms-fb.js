const firebaseConfig = {
  apiKey: "AIzaSyAql0LLT0nDLUMiqhWKT7y4TRi837KdDic",
  authDomain: "isa-project-f57f2.firebaseapp.com",
  projectId: "isa-project-f57f2",
  storageBucket: "isa-project-f57f2.appspot.com",
  messagingSenderId: "103237690797",
  appId: "1:103237690797:web:eee57b851c6ead696d2d24"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
const loginDiv = document.getElementById('login-panel');
const signUpBtn = document.getElementById('sign-up-button');
const emailSpan = document.getElementById('user-email');
const contentDiv = document.getElementById('content');
const logoutBtn = document.getElementById('sign-out-btn');
const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const noteList = document.getElementById('note-list');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  logInUser();
});

signUpBtn.addEventListener('click', function() {
  registerUser();
});

logoutBtn.addEventListener('click', function() {
  logOutUser();
});

noteForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addNote();
});

function registerUser() {
  const emailValue = emailInput.value;
  const passValue = passInput.value;

  firebase.auth().createUserWithEmailAndPassword(emailValue, passValue)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log('new user registered: ' + user.email);
      })
      .catch(error => alert(error.message));
};

function logInUser() {
  const emailValue = emailInput.value;
  const passValue = passInput.value;

  firebase.auth().signInWithEmailAndPassword(emailValue, passValue)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log('user logged in: ' + user.email);
      })
      .catch(error => alert(error.message));
};

function logOutUser() {
  firebase.auth().signOut()
      .then(() => console.log('user logged out'))
      .catch(error => alert(error.message));
};

function addNote() {
  const noteInput = document.getElementById('note-input');
  const noteValue = noteInput.value;
  db.collection('notes')
      .add({
          id: Date.now(),
          content: noteValue,
          author: firebase.auth().currentUser.uid
      });
  noteInput.value = '';
};

let noteSubscription;

firebase.auth().onAuthStateChanged(user => {
  const loginDiv = document.getElementById('login-panel');
  const emailSpan = document.getElementById('user-email');
  const contentDiv = document.getElementById('content');

  if (noteSubscription) {
      noteSubscription();
      noteSubscription = null;
  }

  if (user) {
      loginDiv.style.display = 'none';
      contentDiv.style = {};
      emailSpan.textContent = `Użytkownik ${user.email} został automatycznie zalogowany`;

      noteSubscription = db.collection('notes')
          .where('author', '==', user.uid).orderBy('id', 'desc').onSnapshot((snapshot) => {
              const noteList = document.getElementById('note-list');
              noteList.innerText = '';
              snapshot.forEach(doc => {
                  const noteNode = document.createElement('li');
                  noteNode.innerText = doc.data().content;
                  noteList.appendChild(noteNode);
              });
          });
  } else {
      contentDiv.style.display = 'none';
      loginDiv.style = {};
  };
});