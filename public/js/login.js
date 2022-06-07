const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#login-un').value.trim();
    const password = document.querySelector('#login-pw').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/generate');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

  