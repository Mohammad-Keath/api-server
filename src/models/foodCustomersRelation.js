'use strict';
const foodCustomersRelation = (sequelize, DataTypes) =>
    sequelize.define("foodCustomersRelation", {
        customerID: {
            type: DataTypes.INTEGER,
        },
        thisCustomerFoodId: {
            type: DataTypes.INTEGER,
        },
      
    
    })


module.exports = foodCustomersRelation;