const database = require ('../models')

class LoginController {

//login
    static async loginUser (req, res){
        const {email, password} = req.body
        try {
            const session  = await database.login.findOne({
                where: {email: String(email), password: String(password)  }
        })
        //console.log(session)
        
            
            return res.status(200).json(session)
        
        } catch (error) {

            //console.log(session)
          //return error(error)
            return res.status(500).json(error.message)
            
        }
        //console.log(req.body)

    }
            

    
     // cadastrar cria um usuario

     static async criarUsuario (req, res){
        const novaPessoa = req.body
        try {
            const  novoUsuarioCriado = await database.login.create(novaPessoa)
            return res.status(200).json(novoUsuarioCriado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
     }
    

  static async pegaTodasLogin(req, res){
        try {
            const todoLogin = await database.login.findAll()
            return res.status(200).json(todoLogin)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


 /*
    // pesquisa todos os logins
     static async pegaTodasLogin(req, res){
         try {
             const todoLogin = await database.login.findAll()
             return res.status(200).json(todoLogin)
         } catch (error) {
             return res.status(500).json(error.message)
         }
     }


/*
     //pesquisa por um usuario

     static async pegaUmUsuario (req, res){
         const {id} = req.params
         try {
             const umsuario  = await database.login.findOne({
                 where: {
                     id: Number(id)
                 }
             })
             return res.status(200).json(umsuario)
         } catch (error) {
             return res.status(500).json(error.message)
             
         }
     }

     //cria um usuario
     static async criarUsuario (req, res){
        const novaPessoa = req.body
        try {
            const  novoUsuarioCriado = await database.login.create(novaPessoa)
            return res.status(200).json(novoUsuarioCriado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
     }
      
     //atualisa um usuario
     static async atualizarUsuario(req, res){
         const {id} = req.params
         const novoUsuario = req.body
         try {
             await database.login.update(novoUsuario, {where: {id: Number(id)}})
             const loginAtualizado = await database.login.findOne({where: {id: Number(id)}})
             return res.status(200).json(loginAtualizado)
         } catch (error) {
             return res.status(500).json(error.message)
         }
     }
*/
     //deleta um usuario
     static async apagaUsuario(req, res){
         const {id} = req.params
         try {
             await database.login.destroy({where: {id: Number(id)}})
             return res.status(200).json({message: `id ${id} Deletado`})
         } catch (error) {
             return res.status(500).json(error.message)
         }
     } 
}

module.exports = LoginController