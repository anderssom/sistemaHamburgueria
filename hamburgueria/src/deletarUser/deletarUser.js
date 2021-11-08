async function deletar(){

    const response = await fetch ('http://localhost:3338/login/:id', {

        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
    
    
      });
      const data = await response.json()
    
 
}
module.exports = deletar