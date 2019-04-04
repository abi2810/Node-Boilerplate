/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Tag3List = Model.define('tag3_lists', {
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
module.exports = Tag3List;
