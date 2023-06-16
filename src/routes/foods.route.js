'use strict';
const express = require('express');
const router = express.Router();
const { food,foodCustomers }=require('../models/index');

router.get('/food',getAllfoods);
router.get('/food/:id',getSpecificfood);
router.post("/food",addfood);
router.put('/food/:id',updatefood);
router.delete('/food/:id',deletefood);

router.get('/thefoodCustomers/:id',getCustumersForSpecificfoodRelation);
async function getCustumersForSpecificfoodRelation(req,res){
    const URL = await food.readRelationDetails(req.params.id,foodCustomers.model);
    res.status(200).send(URL);
};


async function getAllfoods(req,res){
    const URL = await food.read();
    res.status(200).json(URL);
};
async function getSpecificfood(req,res){
    const URL = await food.read(req.params.id);
    res.status(200).send(URL);
};
async function addfood(req,res){
    const URL = await food.create(req.body);
    res.status(201).json(URL);
};
async function updatefood(req,res){
    const URL = await food.update(req.params.id,req.body)
    res.status(201).send(URL);
};
async function deletefood(req,res){
    const URL = food.delete(req.params.id);
    res.status(204).send(URL);
;}

module.exports = router;