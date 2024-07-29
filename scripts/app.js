import { auth, onAuthStateChanged } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    window.location = "./pages/dashboard.html";
  } else {
    window.location = "./pages/login.html";
  }
});
