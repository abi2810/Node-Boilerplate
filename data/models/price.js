/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

 const Price = Model.define('price', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    price_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    app_store_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    play_store_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    meta_data: {
      type: DataTypes.STRING(500),
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
  module.exports = Price;
