const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')

// firebase admin
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://investdy-auth-test-default-rtdb.firebaseio.com/'
})

const app = express()

app.use(logger('dev'))
app.use(cookieParser())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// router 
// app.use('/', require('../app/routes/route.auth')(admin))
app.use('/live', require('../app/routes/route.live'))

// app.use('/user', require('../app/routes/route.user'))

module.exports = app