'use strict';
const clothes = require('./clothes')
const clothesCustomers = require('./clothesCustomers')
const clothesCustomersRelation = (sequelize, DataTypes) =>
    sequelize.define("clothesCustomersRelation", {
        clotheId : {
            type: DataTypes.INTEGER,
            references :{
                model:clothes,
                key:'id'
            }
        },
        clothesCustomerId : {
            type: DataTypes.INTEGER,
            references :{
                model:clothesCustomers,
                key:'id'
            }
        },
    })


    module.exports =clothesCustomersRelation;