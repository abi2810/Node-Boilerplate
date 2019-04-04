/* jshint indent: 2 */
const DataTypes = require('sequelize');
const Model = require('../sequelize');

const Image = Model.define('images', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    },
    image_Text1: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    image_Text2: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    image_Text3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image_Flag1: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
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
  
module.exports = Image;
