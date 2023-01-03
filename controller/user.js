'use strict';

const { User } = require('../modules/index');
const brcypt=require('bcrypt');
const getAllUser=async(req, res)=>{
    try {
        const users= await User.findAll();
        res.status(200).send(users);
        
    } catch (error) {
        console.log(error);
    }
};

const createUser=async(req,res)=>{
    try {
        const user={
            username:req.body.username,
            email:req.body.email,
            password:await brcypt.hash(req.body.password,12)
        };
       const newUser=await User.create(user);
       res.status(200).send(newUser);
    } catch (error) {
        console.log(error);
    }
}



module.exports={
    getAllUser,
    createUser
}
