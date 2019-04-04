/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Tag2List = Model.define('tag2_lists', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tag2_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tag2',
        key: 'id'
      }
    },
    lists_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'lists',
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
module.exports = Tag2List;
