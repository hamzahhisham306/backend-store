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
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
       email:{
         type:DataTypes.STRING,
         allowNull:false,
       },
       address:{
          type:DataTypes.STRING,
          allowNull:false,
       },
       phone:{
        type:DataTypes.STRING,
        allowNull:false
       },
       totalPrice:{
        type:DataTypes.FLOAT,
        allowNull:false
       },
    })
    return Order;
}