/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');


 const CollectionRelation = Model.define(
  'collection_relation', 
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    collections_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'collections',
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
    lists_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'lists',
        key: 'id'
      }
    }
  }, 
);
  module.exports = CollectionRelation;
