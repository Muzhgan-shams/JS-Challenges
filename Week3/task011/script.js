const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation
  if (!email || !password) {
    showError("All fields are required");
    return;
  }

  if (password.length < 8) {
    showError("Password must be at least 8 characters");
    return;
  }

  // If valid, process the form
  console.log("Submitting:", { email, password });
  form.reset(); // clear the form
});

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}
