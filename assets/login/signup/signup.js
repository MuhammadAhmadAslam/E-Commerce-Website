

import { initializeApp , 
     getAuth,
    createUserWithEmailAndPassword,
    app,
    auth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
     } from "../../firebase/firebase.mjs";

const emailInput = document.getElementById('emailInput') ,
passwordInput = document.getElementById('passwordInput') ,
signupBtn = document.getElementById('signup-btn')


let signUpFunction = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    alert('User Successfully Loign');
    window.location.href = 'login.html'
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    
  });
}



signupBtn.addEventListener('click' , signUpFunction)

const haveAccount = document.getElementById('haveAccount')

haveAccount.addEventListener('click' , (e) => {
    e.preventDefault()
    window.location.href = 'login.html'
})

const googleBtn = document.getElementById('google-btn')

let loginToGoogle = (e) => {
    const provider = new GoogleAuthProvider();
    e.preventDefault()
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode);
    console.log(errorMessage);
  });
}

googleBtn.addEventListener('click' , loginToGoogle)

