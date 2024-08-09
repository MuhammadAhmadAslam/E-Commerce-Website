  import { initializeApp  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import {getAuth ,  createUserWithEmailAndPassword ,onAuthStateChanged , GoogleAuthProvider , signInWithPopup} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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
    signInWithPopup
  }