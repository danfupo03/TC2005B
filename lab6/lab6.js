const password = document.getElementById("password");
const verifyPassword = document.getElementById("verify-password");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("message");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (password.value !== verifyPassword.value) {
    message.textContent = "Passwords do not match";
    message.style.color = "red";
  } else if (password.value.length < 8) {
    message.textContent = "Password must be at least 8 characters long";
    message.style.color = "red";
  } else if (!/[A-Z]/.test(password.value)) {
    message.textContent = "Password must contain at least one uppercase letter";
    message.style.color = "red";
  } else if (!/[a-z]/.test(password.value)) {
    message.textContent = "Password must contain at least one lowercase letter";
    message.style.color = "red";
  } else if (!/\d/.test(password.value)) {
    message.textContent = "Password must contain at least one digit";
    message.style.color = "red";
  } else {
    message.textContent = "Password is valid";
  }
});



