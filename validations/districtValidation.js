const Joi = require('joi');

const districtValidationSchema = Joi.object({
  name: Joi.string().required(),
  population: Joi.number().required(),
  state_id: Joi.string().required(),
});

module.exports = districtValidationSchema;
