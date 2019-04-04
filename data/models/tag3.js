/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Tag3 = Model.define('tag3', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tag3_Text1: {
      type: DataTypes.STRING(100),
      allowNull: false
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
module.exports = Tag3;