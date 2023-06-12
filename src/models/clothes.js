'use strict';
const Clothes = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        type : {
            type: DataTypes.STRING,
        },
        color : {
            type: DataTypes.STRING,
        },
        summer :{
            type: DataTypes.BOOLEAN,
        },
        winter :{
            type:DataTypes.BOOLEAN,
        }
    })


    module.exports =Clothes;