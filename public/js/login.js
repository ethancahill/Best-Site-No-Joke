const loginButton = document.getElementById('submit-login');
const signUpButton = document.getElementById('submit-signup');


const loginFormHandler = (event) => {
    event.preventDefault();
    console.log(event);
  
    const username = document.querySelector('#login-in').value.trim();
    const password = document.querySelector('#login-pw').value.trim();
  
    if (username && password) {
      const response = fetch('/api/users/', {
        method: 'GET',
        // body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/generate');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log(event);
  
    const username = document.querySelector('#signup-un').value.trim();
    const password = document.querySelector('#signup-pw').value.trim();
  
    if (username && password) {
      console.log(username);
      console.log(password);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  

if (loginButton) {
loginButton.addEventListener('click', loginFormHandler);
};

if (signUpButton) {
signUpButton.addEventListener('click', signupFormHandler);
};