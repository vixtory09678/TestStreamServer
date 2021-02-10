const streamming = require('./config/streamming')
const API = require('./config/express')
const env_config = require('./config/env')


streamming.run()

API.listen(env_config.API_PORT, () => {
  console.log(`Server run at port ${env_config.API_PORT}`)
})