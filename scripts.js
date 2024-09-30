document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    event.preventDefault();
    alert('Please fill out all required fields.');
  } else {
    alert('Your message has been sent successfully!');
  }
});
