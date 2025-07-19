document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm-password');
    const message = document.getElementById('form-message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
  
      
      if (password.value !== confirm.value) {
        message.textContent = 'Passwords do not match.';
        message.className = 'error';
        confirm.focus();
        return;
      }
  
  
      
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
  
      message.textContent = `Registered: ${fname} ${lname}, Email: ${email}, Mobile: ${mobile}`;
      message.className = 'success';
    });
  });

    const resetButton = document.getElementById('reset-button');
    const message = document.getElementById('form-message');
  
    resetButton.addEventListener('click', () => {
        message.textContent = '';
  });