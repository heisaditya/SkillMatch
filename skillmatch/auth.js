// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDZDA-mrlwvYrxslAhIN-CHJ07IwJidlBI",
  authDomain: "skill-42ad1.firebaseapp.com",
  projectId: "skill-42ad1",
  storageBucket: "skill-42ad1.firebasestorage.app",
  messagingSenderId: "909300939767",
  appId: "1:909300939767:web:d839c56963bfbe0520ccf2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




const loginbtn = document.getElementById('loginbtn');
loginbtn.addEventListener("click", function(event) {
  event.preventDefault();

  const email1 = document.getElementById('email1').value;
  const password1 = document.getElementById('password1').value;

  createUserWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
  
      const user = userCredential.user;
      console.log("User created:", user);
      alert("Account created successfully!");

      window.location.href = "1stpagetry.html";

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating account:", errorCode, errorMessage);
      alert(`Error: ${errorMessage}`);
    });
});
