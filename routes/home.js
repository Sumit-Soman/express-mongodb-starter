const router =  require('express').Router();
const auth = require('../middleware/authetication');

router.get('/home', auth, (req, res, next) => {
    return res.send('You are successfully authenticated and are on home page....');
});

module.exports = router;