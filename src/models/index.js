'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const Clothes = require('./clothes');
const food = require('./food');
const foodCustomers = require('./foodCustomers')
const foodCustomersRelation =require('./foodCustomersRelation')
const clothesCustomers=require('./clothesCustomers')
const clothesCustomersRelation = require('./clothesCustomersRelation')
const Collection = require('./lib/collection')

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
const clothesModel = Clothes(sequelize, DataTypes)
const ClothesCollection = new Collection(clothesModel)

const foodModel = food(sequelize, DataTypes)
const foodCollection = new Collection(foodModel)

const foodCustomersModel = foodCustomers(sequelize, DataTypes)
const foodCustomersCollection = new Collection(foodCustomersModel)

const foodCustomersRelationModel = foodCustomersRelation(sequelize, DataTypes)
const foodCustomersRelationCollection = new Collection(foodCustomersRelationModel)

const clothesCustomersModel = clothesCustomers(sequelize, DataTypes)
const clothesCustomersCollection = new Collection(clothesCustomersModel)

const clothesCustomersRelationModel = clothesCustomersRelation(sequelize, DataTypes)
const clothesCustomersRelationCollection = new Collection(clothesCustomersRelationModel)

clothesCustomersModel.belongsToMany(clothesModel, { through: clothesCustomersRelationModel});
clothesModel.belongsToMany(clothesCustomersModel, { through: clothesCustomersRelationModel}) 

foodCustomersModel.belongsToMany(foodModel, { through: foodCustomersRelationModel});
foodModel.belongsToMany(foodCustomersModel, { through: foodCustomersRelationModel}) 


module.exports = {
    db: sequelize,
    Clothes: ClothesCollection,
    food: foodCollection,
    foodCustomers:foodCustomersCollection,
    foodCustomersRelation:foodCustomersRelationCollection,
    clothesCustomers:clothesCustomersCollection,
    clothesCustomersRelation:clothesCustomersRelationCollection
}