const liveService = require('../services/services.live')

exports.createLive = async (req, res) => {
  const live_dto = req.body
  console.info(live_dto)
  liveService.createLive(live_dto)
    .then((data) => {
      res.json(data)
    }).catch((err) => {
      res.status(500).send('live create fail')
    })
}