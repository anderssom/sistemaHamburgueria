

async function getContent(){

  try {

      const response = await fetch('http://localhost:3338/login')
      //console.log(response)
      const data = await response.json()

      show(data)

      
  } catch (error) {
      console.log(error)
      
  }

}

getContent()
function show(users) {
  let output = ''
  for(let user of users){

    output +=
    
    `<table class="border">
    
    <td class="id" >${user.id}</td>
     <td class="email" >${user.email}</td>
     <td>
    
     <button class="blue" >E</button>
 
     </td>
     <td>
     
     <button class="red" onClick="deletar()">X</button>
 
     </td>    
      </table>`
      
     
  }  

  document.getElementById('lista').innerHTML = output


      }

