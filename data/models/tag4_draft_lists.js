/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Tag4DraftList = Model.define('tag4_draft_lists', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tag4_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tag4',
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
  }, 
);
module.exports = Tag4DraftList;