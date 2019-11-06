const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan =  require('morgan')
const login =  require('./login');
const home =  require('./home');
const register =  require('./register');

module.exports = function(app) {
    app.use(helmet());
    app.use(morgan('tiny'))

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  
    app.use('/api/user', register);
    app.use('/api/user',login);
    app.use('/api/user', home);
};

