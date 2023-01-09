'use strict';

const { Order, User,Product } = require('../modules/index');


const postOrder=async(req,res)=>{
    try {
       const neworder= await Order.create(req.body);
       res.status(200).send({
        message:'create it'
       });

    } catch (error) {
        console.log(error);
    }
}


const getOrders=async(req,res)=>{
  try {
    const withorder= await User.findAll({include:[Order]});
    res.status(200).send(withorder);
  } catch (error) {
    console.log(error);
  }
}
const allOrders = async(req,res)=>{
  try {
     const all= await Order.findAll();
     res.status(200).send(all);

  } catch (error) {
    console.log(error);
  }
}
const testOrders=async(req,res)=>{
  try {
    const withorder= await Order.findAll({include:[User]});
    res.status(200).send(withorder);
  } catch (error) {
    console.log(error);
  }
}

module.exports={
    postOrder,
    getOrders,
    allOrders,
    testOrders
};
