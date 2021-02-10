const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

app.use(cors)
app.use(logger('dev'))
app.use(cookieParser())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


let authorized = true
function checkAuth(req, res, next) {
  if (authorized) {
    next()
  } else {
    res.status(403).send('Unauthorized!')
    return
  }
}

// router 
app.use('/', checkAuth)
app.use('/signup', require('../app/routes/route.signup'))
app.use('/on-trending', require('../app/routes/route.on_trending'))
// app.use('/user', require('../app/routes/route.user'))

module.exports = app