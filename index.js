'use strict';

require('dotenv').config();


const server = require('./server');
const { db } = require('./modules/index');


db.sync().then(() => {
    server.start(4000);
}).catch((err) => console.log(err));
