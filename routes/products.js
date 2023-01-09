'use strict';

const router = require('express').Router();

const { getProducts ,getAll , getById, deleteProduct , createNewProduct} = require('../controller/products');
router.get('/products', getProducts);
router.get('/all',getAll)
router.get('/product/:id', getById);
router.delete('/product/:id', deleteProduct);
router.post('/product', createNewProduct);


module.exports=router;