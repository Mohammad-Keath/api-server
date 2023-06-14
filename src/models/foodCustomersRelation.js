'use strict';
const food = require('./food')
const foodCustomers = require('./foodCustomers')
const foodCustomersRelation = (sequelize, DataTypes) =>
    sequelize.define("foodCustomersRelation", {
        foodCustomerId: {
            type: DataTypes.INTEGER,
            references :{
                model:food,
                key:'id'
            }
        },
         foodId: {
            type: DataTypes.INTEGER,
            references :{
                model:foodCustomers,
                key:'id'
            }
        }
    })


module.exports = foodCustomersRelation;