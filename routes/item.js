'use strict';

const router=require('express').Router();
const {deleteItem, getAllItems,postItem,updateItem, getUserItem}=require('../controller/item');
router.post('/item', postItem);
router.get('/item', getAllItems);
router.delete('/item/:id', deleteItem);
router.put('/item/:id', updateItem);
router.get('/itemuser',getUserItem);
module.exports=router;
