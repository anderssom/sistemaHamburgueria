const { Router } = require('express')
const LoginController = require ('../controllers/loginController.js')

const router = Router()

//faz login de usuarios
router.post('/login', LoginController.loginUser)

//Lista todos os usuarios
router.get('/login', LoginController.pegaTodasLogin)

//listar um usuario por id
//router.get('/login/:id', LoginController.pegaUmUsuario)

// Cria um novo usuario
router.post('/login/cadastrar', LoginController.criarUsuario)

//Atualiza um novo usuario
//router.put('/login/:id', LoginController.atualizarUsuario)

//Deleta um novo usuario
router.delete('/login/:id', LoginController.apagaUsuario)


module.exports = router