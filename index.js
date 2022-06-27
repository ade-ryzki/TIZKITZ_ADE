require('dotenv').config()

const express = require('express')
const helmet = require("helmet")
const cors = require("cors")

const PORT = 4001
const app = express()

app.use(cors())
app.use(helmet({
    crossOriginResourcePolicy: false,
}))

app.use(express.static('public'))
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: true, limit: '100mb' }))

const routes = require('./router/index')(app)
const model = require('./model/index')

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

