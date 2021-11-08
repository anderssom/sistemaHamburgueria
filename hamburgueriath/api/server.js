const cors = require ('cors')
const express = require ('express')
const routes = require ('./rotas/index')
const app = express()


routes(app)
app.use(cors())


app.listen(3338, () => console.log('rodando na porta  3338 🚀'))

module.exports = app