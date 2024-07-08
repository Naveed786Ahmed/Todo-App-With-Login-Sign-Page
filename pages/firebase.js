import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyCzopToh8val4SXjmgELBvvZPvuTwVQz5g",
    authDomain: "todo-app-30228.firebaseapp.com",
    projectId: "todo-app-30228",
    storageBucket: "todo-app-30228.appspot.com",
    messagingSenderId: "595836119371",
    appId: "1:595836119371:web:0ebb8e6aa7020b2dbc20ce",
    measurementId: "G-TCZHPZZ9DE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    provider,
    signInWithPopup
}