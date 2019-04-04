/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Purchase = Model.define('purchase', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    device_token: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    device_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    purchase_token: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, 
);
  module.exports = Purchase;
