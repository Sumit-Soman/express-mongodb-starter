const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

dotenv.config();

const app =  express();

require('./utilities/dbConnection');
require('./routes/routes')(app);


const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening to port ${port} ....`));