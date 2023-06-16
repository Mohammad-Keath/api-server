'use strict';
const express = require('express');
const router = express.Router();
const { foodCustomersRelation }=require('../models/index');

router.get('/foodCustomersRelations',getAllfoodCustomersRelations);
router.post("/foodCustomersRelation",addfoodCustomersRelation);

// router.get('/thecustomerfoods/:id',getFoodForSpecificCustomerRelation);
// router.get('/thefoodCustomers/:id',getCustumersForSpecificfoodRelation);

// router.put('/foodCustomersRelations/:id',updatefoodCustomersRelation);
router.delete('/foodCustomersRelations/:id',deletefoodCustomersRelation);


async function getAllfoodCustomersRelations(req,res){
    const URL = await foodCustomersRelation.read();
    res.status(200).json(URL);
};


// async function getFoodForSpecificCustomerRelation(req,res){
//     const URL = await foodCustomersRelation.readForfoodCustomer(req.params.id);
//     res.status(200).send(URL);
// };
// async function getCustumersForSpecificfoodRelation(req,res){
//     const URL = await foodCustomersRelation.readForFood(req.params.id);
//     res.status(200).send(URL);
// };


async function addfoodCustomersRelation(req,res){
    const URL = await foodCustomersRelation.create(req.body);
    res.status(201).json(URL);
};
// async function updatefoodCustomersRelation(req,res){
//     const URL = await foodCustomersRelation.update(req.params.id,req.body)
//     res.status(201).send(URL);
// };
async function deletefoodCustomersRelation(req,res){
    const URL = foodCustomersRelation.deleteFoodRelation(req.params.id);
    res.status(204).send(URL);
;}

module.exports = router;