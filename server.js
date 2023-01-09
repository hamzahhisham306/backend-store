'use strict';

const express=require('express');
const cors=require('cors');
const app=express();
const user=require('./routes/user');
const products=require('./routes/products');
const order=require('./routes/order');
app.use(cors());
app.use(express.json());
app.use(user);
app.use(products);
app.use(order);
app.get('/',(req,res)=>{
    res.status(200).send({
        message:'Home Page'
    });
});


function start(Port){
    app.listen(Port, ()=>{
        console.log(`Running on port ${Port}`);
    });
};

module.exports={
    start,
    app
}