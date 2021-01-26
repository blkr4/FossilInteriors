'use strict';
const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      mobileNo: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      budget: {
        type: DataTypes.FLOAT
      }
    },
    { 
      paranoid: true,
      tableName: 'users' 
    }
  );

  // User.associate = function (models) {
    
  // }
  return User;
};
