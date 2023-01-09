'use strict';


module.exports=(sequelize, DataTypes)=>{
    const product=sequelize.define('products',{
        idproduct:{
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
        colour:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        brandName:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        imageUrl:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        

    })
    return product;
}