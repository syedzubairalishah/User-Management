import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#signup-form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Result:", result);

    swal({
        title: "Successfully!",
        text: "You have created an account!",
        icon: "success",
      }).then(() => {
        window.location.href = "./login.html";  // Redirect to dashboard page
      });

  } catch (error) {
    console.log("Error message", error.message);
    swal({
        title: "Oops!",
        text: "This email have already an used!",
        icon: "error",
      });
  }
});
