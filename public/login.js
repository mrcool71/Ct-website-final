// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getDatabase();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Get reference to submit button
const submitButton = document.getElementById("submit");

// Add event listener to form submission
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
 // const name = document.getElementById("name").value;
  const email = emailInput.value;
  const password = passwordInput.value;
  // Perform authentication logic here
  console.log("Email:", email);
  console.log("Password:", password);
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging in...");
      window.location.href="../views/profile.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode+errorMessage);
      
    });

});
