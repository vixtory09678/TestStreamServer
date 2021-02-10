const Joi = require('@hapi/joi')

const validate  = (schema) => {
  return (req, res, next) => {
    const schemaObject = Joi.object(schema)
    const {error, _} = schemaObject.validate(req.body)
    if (error) {
      if (process.env.NODE_ENV === 'development')
        console.warn('[error message] ', error.details[0].message)
      return res.status(400).send('Bad request.')
    }
    next()
  }
}

module.exports = { validate }