'use strict';

const router=require('express').Router();


const {addFavorite, getFavorite,getfavoriteUser, updateFavoirt,getUserfavirity,deletefavority}=require('../controller/favorite');
router.post('/favorite', addFavorite);
router.get('/favorite', getFavorite);
router.get('/favoriteuser', getfavoriteUser);
router.put('/favorite/:id', updateFavoirt);
router.get('/userfavority/:id', getUserfavirity);
router.delete('/favorite/:id',deletefavority)
module.exports=router;
