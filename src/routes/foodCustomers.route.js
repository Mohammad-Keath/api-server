'use strict';
const express = require('express');
const router = express.Router();
const { foodCustomers }=require('../models/index');

router.get('/foodCustomers',getAllfoodCustomerss);
router.get('/foodCustomers/:id',getSpecificfoodCustomers);
router.post("/foodCustomers",addfoodCustomers);
router.put('/foodCustomers/:id',updatefoodCustomers);
router.delete('/foodCustomers/:id',deletefoodCustomers);


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