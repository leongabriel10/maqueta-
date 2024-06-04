document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Verificar las credenciales (aquí puedes realizar la autenticación con el servidor)
    if (username === 'usuario' && password === 'contraseña') {
      // Si las credenciales son correctas, almacenar el estado de inicio de sesión
      localStorage.setItem('loggedIn', true);
      window.location.href = 'protected.html';
    } else {
      // Si las credenciales son incorrectas, mostrar un mensaje de error
      document.getElementById('loginMessage').textContent = 'Credenciales incorrectas. Inténtelo de nuevo.';
    }
  });