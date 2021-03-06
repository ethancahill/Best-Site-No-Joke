const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-un').value.trim();
    const password = document.querySelector('#signup-pw').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/generate');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

