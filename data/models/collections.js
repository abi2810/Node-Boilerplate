/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Collection = Model.define(
  'collections', 
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    collection_Text1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    collection_Text2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    collection_Text3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    collection_Text4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    collection_Text5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    collection_Flag1: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    collection_Flag2: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    collection_Flag3: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Model.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, 
);
  module.exports = Collection;
