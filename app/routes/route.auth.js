const express = require('express')
const cors = require('cors')

module.exports = (admin) => {

  const router = express.Router()

  router.use(cors({
    origin: true,
    methods: ['*'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: true
  }))

  router.use((req, res, next) => {
    if (req.header.authtoken) {
      admin.auth().verifyIdToken(req.header.authtoken)
        .then(()=>{
          next()
        }).catch(()=>{
          res.status(403).send('Unauthorized!')
        })
    } else {
      res.status(403).send('Unauthorized!')
    }
  })
  return router
}
