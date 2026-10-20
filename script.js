  
    function entrar(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      localStorage.setItem('eternizeUsuario', email.split('@')[0]);

      alert('Login realizado com sucesso!');
      window.location.href = 'paginaprincip.html';
    }
  
