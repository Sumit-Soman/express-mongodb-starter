const db = require('mongoose');

db.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch((error) => console.log(error));