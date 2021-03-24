process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const API = require('./config/express')
const env_config = require('./config/env')



API.listen(env_config.API_PORT, () => {
  console.log(`Server run at port ${env_config.API_PORT}`)
})