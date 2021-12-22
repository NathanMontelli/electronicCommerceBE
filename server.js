const express = require('express')
const {Category, Product, ProductTag, Tag} = require('./models')
// import sequelize connection

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
app.listen(process.env.PORT || 3000)

