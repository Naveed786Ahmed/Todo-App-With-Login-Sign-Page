import {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendPasswordResetEmail, GoogleAuthProvider, provider, signInWithPopup,
} from "./firebase.js";

const LoginCover = document.getElementById("LoginCover");
const SignUpCovers = document.getElementById("SignUpCovers");
const errorMes = document.getElementById("errorMessage")
const errorMessages = document.getElementById("errorMessages")
const okay = document.getElementById("okay")
const loginPages = document.getElementById("loginPage");
const signUpPages = document.getElementById("signUpPage");
const signUPbtn = document.getElementById("signUPbtn");
const loginBtn = document.getElementById("loginBtn");
const forgetPass = document.getElementById("forgetPass");
const loginGoogle = document.getElementById("loginGoogle");


const Signupfx = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("pass");

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successfully Register Yeah!!");
            SignUpCovers.style.display = "none"
            LoginCover.style.display = "flex"
        })
        .catch((error) => {
            const errorMessage = error.message;
            errorMes.style.display = "flex";
            errorMessages.innerHTML = errorMessage;
        });
}

const loginfux = () => {
    const loginemail = document.getElementById("loginemail");
    const loginpass = document.getElementById("loginpass");

    signInWithEmailAndPassword(auth, loginemail.value, loginpass.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successfully Login Yeah!!")
            location.pathname = "/pages/Todo%20Aap/Todo.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            errorMes.style.display = "flex";
            errorMessages.innerHTML = errorMessage;
        });
}

const forgetPassfux = () => {
    const loginemail = document.getElementById("loginemail");
    sendPasswordResetEmail(auth, loginemail.value)
        .then(() => {
            alert("Check Your Email!!")
        })
        .catch((error) => {
            const errorMessage = error.message;
            errorMes.style.display = "flex";
            errorMessages.innerHTML = errorMessage;
        });
}

const loginGooglefux = () => {    
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            alert("Successfully Login Yeah!!")
            location.pathname = "/pages/Todo%20Aap/Todo.html";
            
        }).catch((error) => {
            const errorMessage = error.message;
            errorMes.style.display = "flex";
            errorMessages.innerHTML = errorMessage;
        });
}

const loginPage = () => {
    SignUpCovers.style.display = "none"
    LoginCover.style.display = "flex"

}

const signUpPage = () => {
    LoginCover.style.display = "none"
    SignUpCovers.style.display = "flex"
}

const Okay = () => {
    errorMes.style.display = "none";
}


loginPages.addEventListener("click", loginPage)
signUpPages.addEventListener("click", signUpPage)
signUPbtn.addEventListener("click", Signupfx)
okay.addEventListener("click", Okay)
loginBtn.addEventListener("click", loginfux)
forgetPass.addEventListener("click", forgetPassfux)
loginGoogle.addEventListener("click", loginGooglefux)