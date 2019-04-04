/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const LabelDetail = Model.define('label_detail', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    label_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    table_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(10000),
      allowNull: false
    }
  }, 
);
module.exports = LabelDetail;
