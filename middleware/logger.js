module.exports = log = (req, res, next) => {
    console.log(req.query);
    next();
}