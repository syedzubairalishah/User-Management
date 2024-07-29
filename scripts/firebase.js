// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBjAyvYNufQfyjZtLKNbKu0Wx0_8-Uwh4",
  authDomain: "shah-jee-b7611.firebaseapp.com",
  projectId: "shah-jee-b7611",
  storageBucket: "shah-jee-b7611.appspot.com",
  messagingSenderId: "264178943167",
  appId: "1:264178943167:web:159fa1d0cfad538382b20a",
  measurementId: "G-Z031HNXJEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged};

