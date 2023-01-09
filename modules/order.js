'use strict';


module.exports=(sequelize, DataTypes)=>{
    const Order = sequelize.define("Orders",{
        UserId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        prdunctId:{
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true
        }
    })
    return Order;
}