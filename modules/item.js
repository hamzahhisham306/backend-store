'use strict';


module.exports=(sequelize, DataTypes)=>{
    const item=sequelize.define('items',{
        useritemID:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:true,
        },
        paragraph:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        imageUrl:{
            type:DataTypes.STRING,
            allowNull:true,
        },
    })
    return item;
}