import { auth, signInWithEmailAndPassword } from "./firebase.js";

const login_msg = document.querySelector("#login-msg");
const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    login_msg.innerText = "Loading...";

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("Result:", result);

    swal({
        title: "Successfully!",
        text: "You log into your account!",
        icon: "success",
      }).then(() => {
        window.location.href = "./dashboard.html";  // Redirect to dashboard page
      });
    
    login_msg.innerText = "";
    
  } catch (error) {
    login_msg.innerText = error.message || "Her is an  any error.";
    console.log("Error message", error.message);
    swal({
        title: "Sorry!",
        text: "This email does not have an account!",
        icon: "error",
      });
    login_msg.innerText = "";
  }
});
