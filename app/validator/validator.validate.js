const Joi = require('@hapi/joi')

const validate  = (schema, payload) => {
  const schemaObject = Joi.object(schema)
  const {error, _} = schemaObject.validate(payload)
  if (error) {
    if (process.env.NODE_ENV === 'development')
      console.warn('[error message] ', error.details[0].message)
    return false
  }
  return true
}

module.exports = { validate }