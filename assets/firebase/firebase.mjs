  import { initializeApp  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import {sendEmailVerification , getAuth , signOut ,createUserWithEmailAndPassword ,onAuthStateChanged , GoogleAuthProvider , signInWithEmailAndPassword ,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAcEusuBViHZG_gqw8BqABccSmVDXUvH70",
    authDomain: "muhammad-ahmed-demo-work.firebaseapp.com",
    projectId: "muhammad-ahmed-demo-work",
    storageBucket: "muhammad-ahmed-demo-work.appspot.com",
    messagingSenderId: "1045072993781",
    appId: "1:1045072993781:web:52ac8fd8f892e73d8014bc"
  };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

  export{
    initializeApp,
    getAuth,
    createUserWithEmailAndPassword,
    app,
    auth,
    onAuthStateChanged ,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    getFirestore,
    doc,
    getDoc,
    setDoc ,
    sendEmailVerification,
    signOut
  }