'use strict';
// const Collection = require('../models/lib/collection')
const express = require('express');
const router = express.Router();
const { Clothes }=require('../models/index');



router.get('/clothes',getAllClothes);
router.get('/cloth/:id',getSpecificCloth);
router.post("/cloth",addCloth);
router.put('/cloth/:id',updateCloth);
router.delete('/cloth/:id',deleteCloth);


async function getAllClothes(req,res){
    const URL = await Clothes.read();
    res.status(200).json(URL);
};
async function getSpecificCloth(req,res){
    const URL = await Clothes.read(req.params.id);
    res.status(200).send(URL);
};
async function addCloth(req,res){
    const URL = await Clothes.create(req.body);
    res.status(201).json(URL);
};
async function updateCloth(req,res){
    const URL = await Clothes.update(req.params.id,req.body);
    res.status(201).send(URL);
};
async function deleteCloth(req,res){
    const URL = Clothes.delete(req.params.id);
    res.status(204).send(URL);
;}

module.exports = router;