const { v4: uuidv4 } = require('uuid')
const encrypt_stream = require('../utils/utils.encrypt_stream_auth')
const env_config = require('../../config/env/development')

exports.createLive = async function (live_create_dto) {
  return new Promise((resolve) => {
    const id_gen = uuidv4()
    const streamID = '/live/obs'
    const exp = (Date.now() / 1000 | 0) + 60;
    
    const key_auth = encrypt_stream(streamID, exp, env_config.STREAM_KEY)
  
    const comfirm = {
      url_stream: 'rtmp://localhost:1935/live/obs' + '?sign=' + key_auth ,
      live_id: 'obs',
      key: key_auth
    }
    resolve(comfirm)
  })
}