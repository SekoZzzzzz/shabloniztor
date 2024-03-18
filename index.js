require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const path = require('path')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 5000
const app = express()
app.use(errorHandler)
const start = async () =>{
  try{
    await sequelize.authenticate()
    await sequelize.sync()
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch(e){
    console.log(e)
  }
}
start()