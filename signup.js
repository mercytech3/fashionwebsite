document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const terms = document.getElementById("terms").checked;

  let errorMessage = "";

  // Validate form fields
  if (!name || !email || !password || !confirmPassword) {
    errorMessage = "All fields are required.";
  } else if (password !== confirmPassword) {
    errorMessage = "Passwords do not match.";
  } else if (!terms) {
    errorMessage = "You must agree to the terms and conditions.";
  }

  // Display error message or submit form
  if (errorMessage) {
    document.getElementById("error-message").textContent = errorMessage;
    document.getElementById("error-message").style.display = "block";
  } else {
    document.getElementById("error-message").style.display = "none";
    alert("Signup successful!");
    // Here, you can proceed to submit the form data to a server
  }
});
