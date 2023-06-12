'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const Clothes = require('./clothes');
const food = require('./food');

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

module.exports = {
    db: sequelize,
    Clothes: Clothes(sequelize, DataTypes),
    food: food(sequelize, DataTypes),
}