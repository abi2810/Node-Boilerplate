/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tag3_draft_lists', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tag3_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tag3',
        key: 'id'
      }
    },
    draft_lists_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'draft_lists',
        key: 'id'
      }
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
    tableName: 'tag3_draft_lists'
  });
};
