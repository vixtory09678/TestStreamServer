const Joi = require('@hapi/joi')

const CustomJoi = Joi.extend(require('joi-phone-number'))

const signup_register = {

}

const signupProfessional = {
  user_id: Joi.string().required(),
  full_name: Joi.string().required(),
  address: Joi.string().required(),
  tel: CustomJoi.string().phoneNumber().required(),
  nationality: Joi.string().required(),
  national_id: Joi.string().length(13).pattern(/^[0-9]$/).required(),
  investment_speciality: Joi.string().required()
}

const userInterest = {
  user_id: Joi.string().required(),
  interests: Joi.array().items(Joi.string()).required()
}

module.exports = { signupProfessional, userInterest }