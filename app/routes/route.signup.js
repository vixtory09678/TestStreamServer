const express = require('express')
const router = express.Router()
const cors = require('cors')

const signupController = require('../controller/controller.signup')

// validate reqest
const {validate} = require('../validator/validator.validate')
const {signupProfessional} = require('../validator/validator.schema_signup')

router.use(cors({
  origin: true,
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: true
}))

// router hear
router
  .route('/')
  .post(validate(signupProfessional), signupController.signupProfessional)




module.exports = router