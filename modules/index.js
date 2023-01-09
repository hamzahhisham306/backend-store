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
const User = require('./user')(sequelize, DataTypes);
const product = require('./products')(sequelize, DataTypes);
const Order =require('./order')(sequelize, DataTypes);

User.hasMany(Order, {forignKey:'userId', primaryKey:'id'});
Order.belongsTo(User, {forignKey: 'userId', targetKey: 'id'});







sequelize.authenticate().then(() => {
    console.log("Database connected to postgres");
}).catch((err) => {
    console.log(err);
});


module.exports = {
    db: sequelize,
    User:User,
    Product:product,
    Order:Order
};
