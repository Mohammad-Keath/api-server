'use strict';
const clothesCustomers = (sequelize, DataTypes) =>
    sequelize.define("clothesCustomers", {
        name: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        
    })


    module.exports =clothesCustomers;