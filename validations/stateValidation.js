const Joi = require('joi');

const stateValidationSchema = Joi.object({
  name: Joi.string().required(),
  population: Joi.number().required(),
  area: Joi.number().required(),
});

module.exports = stateValidationSchema;
