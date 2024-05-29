/* Importing Modules!! */
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyD6cgG78_4VcZntkqH63Z2MT5b-Jv8btxc",
    authDomain: "sparkturf-99375.firebaseapp.com",
    projectId: "sparkturf-99375",
    storageBucket: "sparkturf-99375.appspot.com",
    messagingSenderId: "316705252947",
    appId: "1:316705252947:web:d4c24159341cbd09c708a6"
  };

  
  const app = initializeApp(firebaseConfig);
  
  
  
  
  
  
  
/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
    
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
    
    
    
})





var authenticated;

/* Functions*/
function createUser() {

const name=document.getElementById('c-username').value,
email=document.getElementById('c-email').value,
pass=document.getElementById('c-pass').value



const auth = getAuth();
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert(signedUp)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  authenticated=true

}






function loginUser() {
   const email=document.getElementById('l-email').value,
pass=document.getElementById('l-pass').value 



const auth = getAuth();
signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
authenticated=true;
}






/* calling the functions*/
/* for creating Users*/
const createBtn=document.getElementById('createUser')

createBtn.addEventListener('click',()=>{
    createUser()
    
    if (authenticated){
        window.location.href="https://www.youtube.com"
    }
})
/* for singing in users*/
const loginBtn=document.getElementById('loginUser')

loginBtn.addEventListener('click',()=>{
    loginUser();
    
    if (authenticated){
        window.location.href="https://www.youtube.com"
    }
})

