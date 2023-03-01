"use strict";

const { Sequelize, DataTypes } = require('sequelize');


const POSTGRES_URL = 'postgres://hamzah_user:p2Tm8MfwMEuczoMNBE8sH45exEpQlLbF@dpg-cfuhat9gp3jl07eomv30-a.oregon-postgres.render.com/hamzah';
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
const item =require('./item')(sequelize, DataTypes);
const favorite =require('./favorite')(sequelize, DataTypes);

User.hasMany(Order, {forignKey:'userId', primaryKey:'id'});
Order.belongsTo(User, {forignKey: 'userId', targetKey: 'id'});


User.hasMany(item,{foreignKey:'useritemID', sourceKey:'id'});
item.belongsTo(User,{foreignKey:'useritemID', targetKey:'id'});

User.hasMany(favorite,{foreignKey:'UserfavoriteId',sourceKey:'id'});
favorite.belongsTo(User,{foreignKey:'UserfavoriteId',targetKey:'id'})




sequelize.authenticate().then(() => {
    console.log("Database connected to postgres");
}).catch((err) => {
    console.log(err);
});


module.exports = {
    db: sequelize,
    User:User,
    item:item,
    Product:product,
    Order:Order,
    favorite:favorite
};
