const cors = require ('cors')
const axios = require ('axios')
const bodyparse = require('body-parser')
const llogin = require('./loginRotas')

module.exports = app => {
 app.use(cors())
    app.use(bodyparse.json())
    app.use(llogin)
    
}