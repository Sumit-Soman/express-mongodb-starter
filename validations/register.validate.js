const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
    name: Joi.string().required().max(10),
    email: Joi.string().required().min(5).email(),
    password: Joi.string().min(5).max(100).required(),
    phoneNumber: Joi.number().required()
});

module.exports.registerSchema = registerSchema;

