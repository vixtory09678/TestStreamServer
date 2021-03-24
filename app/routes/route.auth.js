const express = require('express')
const cors = require('cors')

module.exports = (admin) => {

  const router = express.Router()

  router.use(cors())
  
  router.use((req, res, next) => {
    if (req.headers.authtoken) {
      admin.auth().verifyIdToken(req.headers.authtoken)
        .then((decodeToken)=>{
          console.log('pass ', decodeToken.uid)
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
