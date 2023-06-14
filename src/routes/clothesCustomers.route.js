'use strict';
// const Collection = require('../models/lib/collection')
const express = require('express');
const router = express.Router();
const { clothesCustomers }=require('../models/index');



router.get('/clothesCustomers',getAllclothesCustomers);
router.get('/clothesCustomers/:id',getSpecificclothesCustomer);
router.post("/clothesCustomers",addclothesCustomer);
router.put('/clothesCustomers/:id',updateclothesCustomer);
router.delete('/clothesCustomers/:id',deleteclothesCustomer);


async function getAllclothesCustomers(req,res){
    const URL = await clothesCustomers.read();
    res.status(200).json(URL);
};
async function getSpecificclothesCustomer(req,res){
    const URL = await clothesCustomers.read(req.params.id);
    res.status(200).send(URL);
};
async function addclothesCustomer(req,res){
    const URL = await clothesCustomers.create(req.body);
    res.status(201).json(URL);
};
async function updateclothesCustomer(req,res){
    const URL = await clothesCustomers.update(req.params.id,req.body);
    res.status(201).send(URL);
};
async function deleteclothesCustomer(req,res){
    const URL = clothesCustomers.delete(req.params.id);
    res.status(204).send(URL);
;}

module.exports = router;