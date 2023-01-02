"use strict";

const { Sequelize, DataTypes } = require('sequelize');


const POSTGRES_URL = 'postgresql://postgres:n3nH0qB3hzYocml2WVIp@containers-us-west-127.railway.app:6229/railway';

const sequelizeOption = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

sequelize.authenticate().then(() => {
    console.log("Database connected to postgres");
}).catch((err) => {
    console.log(err);
});


module.exports = {
    db: sequelize,
};
