/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Tag1DraftList = Model.define('tag1_draft_lists', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tag1_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tag1',
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
module.exports = Tag1DraftList;
