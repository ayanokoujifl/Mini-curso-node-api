const express = require('express')
const app = express()
const router = require('./routes')

const database=require('./sequelize')

app.use(express.json())

app.use(router)

database.sync().then(
    app.listen(3000)
)