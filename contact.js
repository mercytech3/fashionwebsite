document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate the form
  if (!name || !email || !message) {
    showMessage('Please fill out all fields!', 'error');
    return;
  }

  // Simulate a successful form submission
  showMessage('Your message has been sent successfully!', 'success');
  document.getElementById('contact-form').reset(); // Reset form fields
});

// Show success or error messages
function showMessage(message, type) {
  const messageBox = document.getElementById('form-message');
  messageBox.textContent = message;
  messageBox.className = 'form-message ' + type;
  messageBox.style.display = 'block';

  setTimeout(function() {
    messageBox.style.display = 'none';
  }, 5000); // Hide message after 5 seconds
}
