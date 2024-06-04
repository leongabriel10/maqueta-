const redirectIfNotLoggedIn = () =>  {
    console.log("Pasa por aqui");
    // Verificar si el usuario está autenticado
    let loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
      window.location.href = 'index.html';
    }
  }

redirectIfNotLoggedIn();