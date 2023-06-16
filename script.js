// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    
    // Perform validation and submit form data to server
    // Replace the following lines with your own implementation
    
    if (name && email && message) {
      alert('Form submitted successfully!');
      // Reset form inputs
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    } else {
      alert('Please fill in all fields.');
    }
  });