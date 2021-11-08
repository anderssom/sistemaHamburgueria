
/*function entrar(){

    const email = document.getElementById('text')
const senha = document.getElementById('senha')
//const res = document.getElementById('res')
const n1 = Number(email.value)
const n2 = Number(senha.value)
const s = n1 + n2
//alert (`A soma ${n1} e ${n2} e igual a ${s}`)
location.replace('../home/home.html')
    
}*/
async  function entrar(){

  const email = document.getElementById('email').value
  const senha = document.getElementById('senha').value
  
  const response = await fetch('http://localhost:3338/login', {
    
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: senha
    })


  });
  const data = await response.json()

  location.replace('../home/home.html')
}



    
   