const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

// firebase admin
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const app = express()

app.use(logger('dev'))
app.use(cookieParser())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// router 
app.use('/', require('../app/routes/route.auth')(admin))
app.use('/signup', require('../app/routes/route.signup'))
app.use('/on-trending', require('../app/routes/route.on_trending'))
// app.use('/user', require('../app/routes/route.user'))
module.exports = app