'use strict';
const express = require('express');
const router = express.Router();
const { food }=require('../models/index');

router.get('/foods',getAllfoods);
router.get('/foods/:id',getSpecificfood);
router.post("/foods",addfood);
router.put('/foods/:id',updatefood);
router.delete('/foods/:id',deletefood);


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