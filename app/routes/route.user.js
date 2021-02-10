const express = require('express')
const router = express.Router()
const cors = require('cors')

router.use(cors({
  origin: true,
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: true
}))

// router hear





module.exports = router