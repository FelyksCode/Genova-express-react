const Joi = require("joi");

const userRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    nim: Joi.string().min(1).max(18).required(),
    ktm: Joi.any(),
})

const newsSchema = Joi.object({
    image: Joi.any().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
});


const validatePayload = (param, schema) => {
    const { value, error } = schema.validate(param);
    if (error) {
        return { error: true, message: error.details[0].message }
    }
    return { error: false, data: value }
}

module.exports = {
    userRegisterSchema,
    newsSchema,
    validatePayload,
}
