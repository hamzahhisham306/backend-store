'use strict';

const router=require('express').Router();
const {postOrder, getOrders,allOrders,testOrders}=require('../controller/order');
router.post('/order', postOrder);
router.get('/orders', getOrders);
router.get('/allorders', allOrders)
router.get('/test',testOrders)

module.exports=router;
