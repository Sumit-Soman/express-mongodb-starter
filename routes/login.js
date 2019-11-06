const router = require('express').Router();
const User = require('../model/User');
const {loginSchema} = require('../validations/login.validate');
const {validation} = require('../validations/validation');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

router.post('/login', async (req, res, next) => {
    const error = validation(loginSchema, req.body);
    if(error) res.status(400).send(error);

    const user = await User.findOne({ email : req.body.email});
    if(!user) return res.status(400).send('Email address not found')
    
    const authStatus = await bcrypt.compare(req.body.password, user.password)
    if(!authStatus) return res.status(400).send('Incorrect password')

    const jwtToken = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

    res.header({'auth-token' : jwtToken});
    res.send("Login successfull :" + jwtToken);
})

module.exports = router;