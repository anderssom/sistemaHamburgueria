import BotaoDel from '../postUsuarios/componentes/botaoDel.js'

async function getContent(){

  try {

      const response = await fetch('http://localhost:3338/login')
      //console.log(response)
      const data = await response.json();
      
      criarTarefa(data)
      //console.log(data)

  } catch (error) {
      console.log(error)
      
  }

}
getContent()

// cria a funçao para pega o evento
const criarTarefa = (users) =>{

  //users.preventDefault();

  for(let user of users) {

  //seleciona a lista 
  const lista = document.querySelector('[data-list]');

  //criar uma lista de usuarios
  const  tarefa = document.createElement('li');
  tarefa.classList.add()
  
  //pega o conteudo da lista

    const conteudo = `<p class="email" >${user.email}</p>`
   // console.log(conteudo);
  
  //mostra a lista na tela
  tarefa.innerHTML = conteudo
  
  //insere um novo nó na estrutura
  tarefa.appendChild(BotaoDel());
  lista.appendChild(tarefa);
  }

}
