async  function entrar(){

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const true1 = document.getElementById('true').value
    const role = document.getElementById('role').value


    const response = await fetch('http://localhost:3338/login/cadastrar', {
      
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: senha,
        ativo: true1,
        role:role
      })
  
  
    });
    const data = await response.json()
  
    location.replace('../home/home.html')
  }