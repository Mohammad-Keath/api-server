'use strict';
const express = require('express');
const router = express.Router();
const { Clothes }=require('../models/index');

router.get('/clothes',getAllClothes);
router.get('/clothes/:id',getSpecificCloth);
router.post("/clothes",addCloth);
router.put('/clothes/:id',updateCloth);
router.delete('/clothes/:id',deleteCloth);


async function getAllClothes(req,res){
    const URL = await Clothes.findAll();
    res.status(200).json(URL);
};
async function getSpecificCloth(req,res){
    const URL = await Clothes.findOne({where:{id:req.params.id}});
    res.status(200).send(URL);
};
async function addCloth(req,res){
    const URL = await Clothes.create(req.body);
    res.status(201).json(URL);
};
async function updateCloth(req,res){
    const URL = await Clothes.findOne({where:{id:req.params.id}});
    const newURL = await URL.update(req.body)
    res.status(201).send(newURL);
};
async function deleteCloth(req,res){
    const URL = Clothes.destroy({where:{id:req.params.id}});
    res.status(204).send(URL);
;}

module.exports = router;