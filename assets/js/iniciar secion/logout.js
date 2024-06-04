document.getElementById('logoutBtn').addEventListener('click', function() {
    // Limpiar el estado de inicio de sesión
    localStorage.removeItem('loggedIn');
    // Redireccionar al usuario a la página de inicio de sesión
    window.location.href = 'index.html';
  });