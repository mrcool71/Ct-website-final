const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZUFFdk8882mYlBpBwQcnnWgsSf-cdJ6g",
  authDomain: "dustbin-ct-project.firebaseapp.com",
  projectId: "dustbin-ct-project",
  storageBucket: "dustbin-ct-project.appspot.com",
  messagingSenderId: "250268549065",
  appId: "1:250268549065:web:78aa654408be8a6c447218",
  measurementId: "G-2MR889KZVK",
};


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const emailInput = document.getElementById("email");
const passwordsignup = document.getElementById("passwordsignup");
const passwordlogin = document.getElementById("passwordsignin");
const emailsignin = document.getElementById("emailsignin");

// Get reference to submit button
const submitButton = document.getElementById("submitting");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("namesignup").value;
  const email = emailInput.value;
  const password = passwordsignup.value;
  // Perform authentication logic here
  console.log("Email:", email);
  console.log("Password:", password);
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating account...");
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode+errorMessage);
      
    });
    container.classList.remove("sign-up-mode");
});
const submitsigninButton = document.getElementById("submitsignin");

// Add event listener to form submission
submitsigninButton.addEventListener("click", function (event) {
  event.preventDefault();
 // const name = document.getElementById("name").value;
  const email = emailsignin.value;
  const password = passwordlogin.value;
  // Perform authentication logic here
  console.log("Email:", email);
  console.log("Password:", password);
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging in...");
      window.location.href="profile.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode+errorMessage);
      
    });

});



