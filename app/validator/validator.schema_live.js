const Joi = require('@hapi/joi')

const crateLive = {
  live_name: Joi.string().required(),
  invest_category: Joi.string().required(),
  live_photo_cover: Joi.string().uri(),
  is_private: Joi.boolean().required(),
  description: Joi.string()
}

module.exports = { crateLive }