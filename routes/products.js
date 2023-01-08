'use strict';

const router = require('express').Router();

const { getProducts ,getAll , getById} = require('../controller/products');
router.get('/products', getProducts);

router.get('/all',getAll)
router.get('/product/:id', getById);
module.exports=router;