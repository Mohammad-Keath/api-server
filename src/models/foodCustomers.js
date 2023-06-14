'use strict';
const foodCustomers = (sequelize, DataTypes) =>
    sequelize.define("foodCustomers", {
        name: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
    })


module.exports = foodCustomers;