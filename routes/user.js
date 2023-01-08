'use strict';


const router = require('express').Router();
const { getAllUser,createUser ,loginUser} = require('../controller/user');
router.get('/user', getAllUser);
router.post('/user',createUser);
router.post('/login', loginUser);
module.exports=router;