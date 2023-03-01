'use strict';


const {item, User}=require('../modules/index');



const postItem=async(req,res)=>{
  try{
   const newItem={
    useritemID:req.body.useritemID,
      name:req.body.name,
      price:req.body.price,
      paragraph:req.body.paragraph,
      imageUrl:req.body.imageUrl
   };
 const newPost= await item.create(newItem);
  return res.status(200).json(newPost);
  }
  catch(error){
    console.log(error);
  }
}


const updateItem=async(req,res)=>{
    try {
      const id=req.params.id;
      const newData=req.body;
      const findItem=await item.findOne({where:{id}});
      const updateItem=await findItem.update(newData);
      return res.status(200).json(updateItem);

    } catch (error) {
        console.log(error);
    }
}

const deleteItem=async(req,res)=>{
    try {
    const id=req.params.id;
    const deleteItem=await item.destroy({where:{id:id}});
    return res.status(200).json(deleteItem);
    } catch (error) {
        console.log(error);
    }
}

const getAllItems=async(req,res)=>{
    try {
        const findAll=await item.findAll();
        res.status(200).json(findAll);
    } catch (error) {
        console.log(error);
    }
}
const getUserItem=async(req,res)=>{
    try {
    const all=await User.findAll({include:[item]});
    res.status(200).json(all);
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    postItem,
    updateItem,
    deleteItem,
    getAllItems,
    getUserItem
}