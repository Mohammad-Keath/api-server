'use strict';
const clothesCustomersRelation = (sequelize, DataTypes) =>
    sequelize.define("clothesCustomersRelation", {
        clotheId : {
            type: DataTypes.INTEGER,
        },
        clothesCustomerId : {
            type: DataTypes.INTEGER,
        },
    })


    module.exports =clothesCustomersRelation;