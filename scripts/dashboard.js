import { auth, onAuthStateChanged, signOut } from "./firebase.js";

const user_email = document.querySelector("#user_email");

onAuthStateChanged(auth, (user) => {
  if (user) {
    user_email.innerText = user.email;
    console.log("User is sign in.", user);
  } else {
    window.location = "./login.html";
    console.log("User is sign out.", user);
  }
});

const logout_btn = document.querySelector("#logout_btn");

logout_btn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    console.log("Sign out successfully.");
  } catch (error) {
    console.log("Error message", error);
  }
});
