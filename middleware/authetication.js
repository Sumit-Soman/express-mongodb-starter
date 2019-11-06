const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken';

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied')

    try{
        const userId = jwt.verify(token, process.env.TOKEN_SECRET)
        res.user = userId;
        next();

    }catch (error){ 
        return res.status(400).send('Invalid Token')
    }
}