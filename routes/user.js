'use strict';


const router = require('express').Router();
const { getAllUser,createUser } = require('../controller/user');
router.get('/user', getAllUser);
router.post('/user',createUser);

module.exports=router;