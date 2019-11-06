const Joi = require('@hapi/joi');

const loginSchema = Joi.object({
    email: Joi.string().required().min(5).email(),
    password: Joi.string().required(),
});

module.exports.loginSchema = loginSchema;

