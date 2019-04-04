/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

 const Tag2 = Model.define('tag2', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tag2_Text1: {
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
  }, {
    tableName: 'tag2'
  });
module.exports = Tag2;