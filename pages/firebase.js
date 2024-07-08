import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyDXvL5dxVXZY9oGtq-ssEtnea8TPinwOTI",
    authDomain: "crud-application-4f33f.firebaseapp.com",
    projectId: "crud-application-4f33f",
    storageBucket: "crud-application-4f33f.appspot.com",
    messagingSenderId: "164304286464",
    appId: "1:164304286464:web:cdcc1d537b85df19b879e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    provider,
    signInWithPopup
}