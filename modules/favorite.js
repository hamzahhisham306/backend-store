'use strict';


module.exports=(sequelize, DataTypes)=>{
    const favorite = sequelize.define("favorites",{
        UserfavoriteId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        title:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:true,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        imageUrl:{
            type:DataTypes.STRING,
            allowNull:true,
        },
     
    })
    return favorite;
}
