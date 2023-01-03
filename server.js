'use strict';

const express=require('express');
const cors=require('cors');
const app=express();
const user=require('./routes/user');
app.use(cors());
app.use(express.json());
app.use(user);

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