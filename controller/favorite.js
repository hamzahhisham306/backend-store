'use strict';

const {favorite, User}=require('../modules/index');



const addFavorite=async(req,res)=>{
    try {
        const data=req.body;
        const newFavorite=await favorite.create(data);
        res.status(200).send(newFavorite);
    } catch (error) {
        console.log(error);
    }
}

const getFavorite=async(req,res)=>{
    try {
        const all=await favorite.findAll();
        res.status(200).send(all);
    } catch (error) {
        console.log(error);
    }
}

const getfavoriteUser=async(req,res)=>{
    try {
        const allwithUser=await User.findAll({include:[favorite]});
        return res.status(200).send(allwithUser);
    } catch (error) {
        console.log(error);
    }
}

const updateFavoirt=async(req,res)=>{
    try {
     const id=req.params.id;
     const search=await favorite.findOne({where:{id:id}});
     search.update(req.body);
     return res.status(200).send(search);
    } catch (error) {
        console.log(error);
    }
}
const getUserfavirity=async(req,res)=>{
    const id=req.params.id;
    const findUser=await User.findOne({where:{id:id},include:[favorite]});
    return res.status(200).send(findUser);
}
const deletefavority=async(req,res)=>{
    try {
        const id=req.params.id;
        const favoritedelete=await favorite.destroy({where:{id:id}});
        res.status(200).send('delete it');
    }    
    catch (error) {
        console.log(error)
    }
}

module.exports={
    addFavorite,
    getFavorite,
    getfavoriteUser,
    updateFavoirt,
    getUserfavirity,
    deletefavority
}