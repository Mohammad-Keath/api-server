'use strict';
// const Collection = require('../models/lib/collection')
const express = require('express');
const router = express.Router();
const { clothesCustomersRelation ,Clothes,clothesCustomers}=require('../models/index');



router.get('/clothesCustomersRelation',getAllclothesCustomersRelation);
router.post("/clothesCustomersRelation",addclothesCustomersRelation);

router.delete('/clothesCustomersRelation/:id',deleteclothesCustomersRelation);

router.get('/theCustomerClothes/:id',getSpecificCustomerClothes);
router.get('/theClothCustomers/:id',getSpecificClothCustomers);






async function getAllclothesCustomersRelation(req,res){
    const URL = await clothesCustomersRelation.read();
    res.status(200).json(URL);
};
async function getSpecificCustomerClothes(req,res){
    const URL = await clothesCustomersRelation.readForCustomer(req.params.id);
    res.status(200).send(URL);
};

async function getSpecificClothCustomers(req,res){
    const URL = await clothesCustomersRelation.readForCloth(req.params.id,clothesCustomers);
    res.status(200).send(URL);
};


async function addclothesCustomersRelation(req,res){
    const URL = await clothesCustomersRelation.create(req.body);
    res.status(201).json(URL);
};

async function deleteclothesCustomersRelation(req,res){
    const URL = clothesCustomersRelation.deleteRelation(req.params.id,Clothes);
    res.status(204).send(URL);
;}

module.exports = router;