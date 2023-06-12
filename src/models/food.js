'use strict';
const food = (sequelize, DataTypes) =>
    sequelize.define("food", {
        Name: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        hot:{
            type:DataTypes.BOOLEAN,
        },
        cold:{
            type:DataTypes.BOOLEAN,
        }
    
    })


module.exports = food;