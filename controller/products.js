'use strict';

const axios = require("axios");
const { Product } = require('../modules/index');
const getProducts = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://asos2.p.rapidapi.com/products/v2/list',
      params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': '79072eb383msh32b2e219e1a6eecp1de1d5jsn812540f92b61',
        'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
      }
    };
   await  axios.request(options).then(resp => {
      // data contains the response from the API
      for(let i =0;i<resp.data.products.length;i++){
      Product.create({
        idproduct:resp.data.products[i].id,
        name:resp.data.products[i].name,
        price:resp.data.products[i].price.current.value,
        colour:resp.data.products[i].colour,
        brandName:resp.data.products[i].brandName,
        imageUrl:resp.data.products[i].imageUrl
      });
    }
    res.status(200).send(resp.data.products);
    }).catch(err=>console.log(err));  
  
  } catch (error) {
    console.log(error);
  }
}
const getAll=async(req,res)=>{
  try {
    const ALl= await Product.findAll();
    res.status(200).send(ALl);
  } catch (error) {
    console.log(error);
  }
}
const getById =async(req,res)=>{
  try {
    const id=req.params.id;
    const getProduct=await Product.findOne({where:{id:id}});
    res.status(200).send(getProduct);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProducts,
  getAll,
  getById
}