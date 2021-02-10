const express = require('express')
const router = express.Router()
const cors = require('cors')

const onTrendingController = require('../../app/controller/controller.on_trending')

router.use(cors({
  origin: true,
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: true
}))

// router hear
router
  .route('/live')
  .get(onTrendingController.getOnTrendingLive)

router
  .route('/community')
  .get(onTrendingController.getOnTrendingCommunity)

router
  .route('/post')
  .get(onTrendingController.getOnTrendingPost)


module.exports = router