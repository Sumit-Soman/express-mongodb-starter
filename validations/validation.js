const Joi = require('@hapi/joi');

const validation = (schema, body) => {
    const {error} = schema.validate(body);
    if(error) return error.details[0].message;
}

module.exports.validation = validation;