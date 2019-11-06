const router = require('express').Router();
const User = require('../model/User');
const {registerSchema} = require('../validations/register.validate');
const {validation} = require('../validations/validation');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res, next) => {

    const error = validation(registerSchema, req.body);
    if(error) return res.status(400).send(error);

    const emailExist = await User.findOne({email : req.body.email});
    if(emailExist) return res.status(400).send('Email already exist');

    const salt = bcrypt.genSaltSync(10);
    const hashPwd = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        password: hashPwd,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    });

    try{
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = router;