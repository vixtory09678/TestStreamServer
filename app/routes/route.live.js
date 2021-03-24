const express = require('express')
const router = express.Router()
const cors = require('cors')

const liveController = require('../controller/controller.live')
const {validate} = require('../validator/validator')
const {createLive} = require('../validator/validator.schema_live')

router.use(cors())

// router hear
router
  .route('/create')
  .post(validate(createLive), liveController.createLive)

  
router
  .route('/list')
  .post((req, res)=>{
    // TODO
    res.send("ok")
  })

router
  .route('/join')
  .post((req, res)=>{
    // TODO
    res.send("ok")
  })


module.exports = router