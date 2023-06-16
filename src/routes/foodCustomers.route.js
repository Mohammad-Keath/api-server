'use strict';
const express = require('express');
const router = express.Router();
const { foodCustomers,food }=require('../models/index');

router.get('/foodCustomers',getAllfoodCustomerss);
router.get('/foodCustomer/:id',getSpecificfoodCustomers);
router.post("/foodCustomer",addfoodCustomers);
router.put('/foodCustomer/:id',updatefoodCustomers);
router.delete('/foodCustomer/:id',deletefoodCustomers);

router.get('/thecustomerfoods/:id',getFoodForSpecificCustomerRelation);
async function getFoodForSpecificCustomerRelation(req,res){
    const URL = await foodCustomers.readRelationDetails(req.params.id,food.model);
    res.status(200).send(URL);
};


async function getAllfoodCustomerss(req,res){
    const URL = await foodCustomers.read();
    res.status(200).json(URL);
};
async function getSpecificfoodCustomers(req,res){
    const URL = await foodCustomers.read(req.params.id);
    res.status(200).send(URL);
};
async function addfoodCustomers(req,res){
    const URL = await foodCustomers.create(req.body);
    res.status(201).json(URL);
};
async function updatefoodCustomers(req,res){
    const URL = await foodCustomers.update(req.params.id,req.body)
    res.status(201).send(URL);
};
async function deletefoodCustomers(req,res){
    const URL = foodCustomers.delete(req.params.id);
    res.status(204).send(URL);
;}

module.exports = router;